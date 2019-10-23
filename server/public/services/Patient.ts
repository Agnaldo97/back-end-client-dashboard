import { generateToken } from "../../middleware/auth-service";
import { ServiceError } from "../../services/ServiceError";
import * as PatientRepository from "../repositories/Patient";
import * as attendanceService from "../services/Attendance";

export async function findPatient(cpf): Promise<Object> {
  const patient = await PatientRepository.findByCpf(cpf);

  if (!patient) throw new ServiceError("patient-not-found");

  const attendance = await attendanceService.verifyAttendance(patient.cpf)
  if (attendance) throw new ServiceError("two-attendances");

  await attendanceService.newAttendance(patient.name, patient.cpf);

  const realUser: any = patient.get({ plain: true });

  const validToken = {
    cpf: realUser.cpf,
    nome: realUser.nome
  };
  const accessToken = await generateToken(validToken);
  realUser.accessToken = accessToken;
  return { patient: realUser };
}
