import * as HistoricRepository from "../repositories/Historic";
import { HistoricDTO } from "../../domain/models/HistoricDTO";


export async function newHistoric(id, idAttendance): Promise<void> {
  await HistoricRepository.newHistoric(id, idAttendance);
}

export async function listAllHistoricByIdPatient(id): Promise<HistoricDTO[]> {
  const response = await HistoricRepository.listAllHistoricByIdPatient(id);
  return response
}
