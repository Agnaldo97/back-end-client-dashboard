import { HospitalDTO } from "../../domain/models/HospitalDTO";

export async function listAllHospital(): Promise<HospitalDTO[]> {
  const response: HospitalDTO[] = await HospitalDTO.findAll();
  return response;
}