import { HistoricDTO } from "../../domain/models/HistoricDTO";

export async function newHistoric(idPatient, idAttendance): Promise<void> {
  const newDate = new Date()
  newDate.setHours(newDate.getHours() - 3)
  await HistoricDTO.create({
    idPatient,
    idAttendance,
    startAttendance: newDate
  });
}

export async function listAllHistoricByIdPatient(id): Promise<HistoricDTO[]> {
  const response = await HistoricDTO.findAll({
    where: {
      idPatient: id
    }
  });

  return response;
}