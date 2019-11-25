import { generateToken } from "../../middleware/auth-service";
import { ServiceError } from "../../services/ServiceError";
import * as PatientRepository from "../repositories/Patient";
import * as attendanceService from "../services/Attendance";
import * as historicService from "../services/Historic";

export async function findPatient(cpf): Promise<Object> {
  const patient = await PatientRepository.findByCpf(cpf);

  if (!patient) throw new ServiceError("patient-not-found");

  const attendance = await attendanceService.verifyAttendance(patient.cpf)
  if (attendance) throw new ServiceError("two-attendances");

  const newAttendance: any= await attendanceService.newAttendance(patient.name, patient.cpf);
  const newHistoric = await historicService.newHistoric(patient.id, newAttendance.id);
  const historics = await historicService.listAllHistoricByIdPatient(patient.id);

  let filterNewHistoric = await historics.filter(historic => 
    historic.id !== newHistoric.id
  );
  
  for (let historic of filterNewHistoric){
    if (historic.priority === "" || historic.priority === null){
      await historicService.updateHistoric(historic);
    }
  }

  const realUser: any = patient.get({ plain: true });

  const validToken = {
    cpf: realUser.cpf,
    nome: realUser.nome
  };
  const accessToken = await generateToken(validToken);
  realUser.accessToken = accessToken;
  realUser.historics = historics;
  console.log(realUser)
  return { patient: realUser };
}
