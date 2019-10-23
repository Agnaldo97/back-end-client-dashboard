import * as AttendanceRepository from "../repositories/Attendance";
import { AttendanceDTO } from "../../domain/models/AttendanceDTO";


export async function newAttendance(name, cpf): Promise<void> {
  await AttendanceRepository.newAttendance(name, cpf);
}

export async function verifyAttendance(cpf): Promise<AttendanceDTO> {
  const response = await AttendanceRepository.verifyAttendance(cpf);
  return response
}
