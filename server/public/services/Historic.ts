import * as HistoricRepository from "../repositories/Historic";
import { HistoricDTO } from "../../domain/models/HistoricDTO";


export async function newHistoric(id, idAttendance): Promise<HistoricDTO> {
  const  response = await HistoricRepository.newHistoric(id, idAttendance);
  return response;
}

export async function listAllHistoricByIdPatient(id): Promise<HistoricDTO[]> {
  const response = await HistoricRepository.listAllHistoricByIdPatient(id);
  return response
}

export async function updateHistoric(historic: HistoricDTO): Promise<void> {
  await HistoricRepository.updateHistoric(historic);
}
