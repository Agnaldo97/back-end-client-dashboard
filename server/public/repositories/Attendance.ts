import { AttendanceDTO } from "../../domain/models/AttendanceDTO";

export async function newAttendance(name,cpf): Promise<void> {
  const newDate = new Date()
  newDate.setHours(newDate.getHours() - 3)
  await AttendanceDTO.create({
    name: name,
    dateRegister: newDate,
    cpf: cpf
  });
}

export async function verifyAttendance(cpf): Promise<AttendanceDTO> {
  const response = await AttendanceDTO.findOne({
    where: {
      cpf,
      status: 'Em processamento'
    }
  });

  return response;
}