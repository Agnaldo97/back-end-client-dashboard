import { AttendanceDTO } from "../../domain/models/AttendanceDTO";

export async function listAllAttendance(): Promise<AttendanceDTO[]> {
  const response = await AttendanceDTO.findAll();
  return response;
}


export async function updateCpfAttendance(cpf): Promise<void> {
  const attendance: AttendanceDTO = await AttendanceDTO.findOne({
    where: {
      cpf
    }
  });
  const newDate = new Date()
  newDate.setHours(newDate.getHours() - 3)
  const realUser: any = attendance.get({ plain: true });
  if (realUser.id) {
    await attendance.update({
      status: 'Em execução',
      checkIn: newDate
    });
  }
}
export async function deleteAttendance(cpf): Promise<void> {
  await AttendanceDTO.destroy({
    where: {
      cpf
    }
  });
}

export async function updatePriorityAttendance(cpf, infos): Promise<void> {
  const attendance: AttendanceDTO = await AttendanceDTO.findOne({
    where: {
      cpf
    }
  });

  const realUser: any = attendance.get({ plain: true });
  if (realUser.id) {
    await attendance.update({
      priority: infos.priority || realUser.priority,
      description: infos.description || realUser.description
    });
  }
}
