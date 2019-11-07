import { AttendanceDTO } from "../../domain/models/AttendanceDTO";

export async function newAttendance(name, cpf): Promise<AttendanceDTO> {
  const newDate = new Date()
  newDate.setHours(newDate.getHours() - 3)
  const response = await AttendanceDTO.create({
    name: name,
    dateRegister: newDate,
    cpf: cpf
  });

  return response
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