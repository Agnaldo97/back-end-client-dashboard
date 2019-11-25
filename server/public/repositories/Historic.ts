import { HistoricDTO } from "../../domain/models/HistoricDTO";

export async function newHistoric(idPatient, idAttendance): Promise<HistoricDTO> {
  const newDate = new Date()
  newDate.setHours(newDate.getHours() - 3)
  const response = await HistoricDTO.create({
    idPatient,
    idAttendance,
    startAttendance: newDate
  });
  return response;
}

export async function listAllHistoricByIdPatient(id): Promise<HistoricDTO[]> {
  const response = await HistoricDTO.findAll({
    where: {
      idPatient: id
    }
  });

  return response;
}
export async function updateHistoric(historic): Promise<void> {
  const dbHistoric: HistoricDTO = await HistoricDTO.findOne({
    where: {
      id: historic.id
    }
  });
  const newDate = new Date()
  newDate.setHours(newDate.getHours() - 3)
  const realUser: any = dbHistoric.get({ plain: true });
  if (realUser.id) {
    try{
      let res = await dbHistoric.update({
        priority: 'Cancelado',
        checkIn: newDate,
        rgbPiority: "#FFFAFA"
      });
      console.log(res)
    } catch (err) {
      console.log(err)
    }

  }
}