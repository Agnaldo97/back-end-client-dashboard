import * as HospitalRepository from "../repositories/Hospital";
import { HospitalDTO } from "../../domain/models/HospitalDTO";

export async function listAllHospital(): Promise<HospitalDTO[]> {
  const response: HospitalDTO[] = await HospitalRepository.listAllHospital();
  return response;
}

