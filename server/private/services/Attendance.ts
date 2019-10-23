import * as AttendanceRepository from "../repositories/Attendance";
import { AttendanceDTO } from "../../domain/models/AttendanceDTO";

export async function listAllAttendance(): Promise<AttendanceDTO[]> {
  const response: AttendanceDTO[] = await AttendanceRepository.listAllAttendance();
  return response;
}

export async function updateCpfAttendance(cpf): Promise<void> {
  await AttendanceRepository.updateCpfAttendance(cpf);
}

export async function deleteAttendance(cpf): Promise<void> {
  await AttendanceRepository.deleteAttendance(cpf);
}

export async function updatePriorityAttendance(cpf, object): Promise<void> {
  if (object.description) {
    const hasKey = await verifyKeys(object.description)
    hasKey ? object.priority = 'Urgente' : object;
  }
  await AttendanceRepository.updatePriorityAttendance(cpf, object);
}


async function verifyKeys(description){
  const palavra1 = 'desmaio	desmaiado	desmaiava	desmaiado	desmaiara	desmaiei	desmaiarei	desmaiado	desmaiaria	desmaiado	desmaie	desmaiado	desmaiasse	desmaiado	desmaiar		desmaiado	desmaiar	desmaiado		 desmaias	desmaiado	desmaiavas	desmaiado	desmaiaras	desmaiaste	desmaiarás	desmaiado	desmaiarias	desmaiado	desmaies	desmaiado	desmaiasses	desmaiado	desmaiares		desmaiado	desmaiares	desmaiado	desmaia	 desmaies desmaia	desmaiado	desmaiava	desmaiado	desmaiara	desmaiou	desmaiará	desmaiado	desmaiaria	desmaiado	desmaie	desmaiado	desmaiasse	desmaiado	desmaiar		desmaiado	desmaiar	desmaiado	desmaie	 desmaie desmaiamos	desmaiado	desmaiávamos	desmaiado	desmaiáramos	desmaiámos	desmaiaremos	desmaiado	desmaiaríamos	desmaiado	desmaiemos	desmaiado	desmaiássemos	desmaiado	desmaiarmos		desmaiado	desmaiarmos	desmaiado	desmaiemos	 desmaiemos desmaiais	desmaiado	desmaiáveis	desmaiado	desmaiáreis	desmaiastes	desmaiareis	desmaiado	desmaiaríeis	desmaiado	desmaieis	desmaiado	desmaiásseis	desmaiado	desmaiardes		desmaiado	desmaiardes	desmaiado	desmaiai	 desmaieis desmaiam	desmaiado	desmaiavam	desmaiado	desmaiaram	desmaiaram	desmaiarão	desmaiado	desmaiariam	desmaiado	s desmaiem	desmaiado	desmaiassem	desmaiado	desmaiarem		desmaiado	desmaiarem	desmaiado	desmaiem	 desmaiem'
  const palavra2 = 'convuncionando convulso	convulsado	convulsava	convulsado	convulsara	convulsei	convulsado	convulsarei	convulsado	convulsaria	convulsado		convulse	convulsado	convulsasse	convulsado	convulsar	convulsado	convulsar	convulsado	convulsas	convulsado	convulsavas	convulsado	convulsaras	convulsaste	convulsado	convulsarás	convulsado	convulsarias	convulsado		convulses	convulsado	convulsasses	convulsado	convulsares	convulsado	convulsares	convulsado	convulsa	convulses convulsa	convulsado	convulsava	convulsado	convulsara	convulsou	convulsado	convulsará	convulsado	convulsaria	convulsado		convulse	convulsado	convulsasse	convulsado	convulsar	convulsado	convulsar	convulsado	convulse	convulse convulsamos	convulsado	convulsávamos	convulsado	convulsáramos	convulsámos	convulsado	convulsaremos	convulsado	convulsaríamos	convulsado		convulsemos	convulsado	convulsássemos	convulsado	convulsarmos	convulsado	convulsarmos	convulsado	convulsemos	convulsemos convulsais	convulsado	convulsáveis	convulsado	convulsáreis	convulsastes	convulsado	convulsareis	convulsado	convulsaríeis	convulsado		convulseis	convulsado	convulsásseis	convulsado	convulsardes	convulsado	convulsardes	convulsado	convulsai	convulseis convulsam	convulsado	 convulsavam	convulsado	convulsaram	convulsaram	convulsado	convulsarão	convulsado	convulsariam	convulsado		convulsem	convulsado	convulsassem	convulsado	convulsarem	convulsado	convulsarem	convulsado	convulsem	convulsemconvulsão'

  let hasKey =  false
  const newDes = description.split(' ')

  for (let palavra of newDes){
    if (palavra1.includes(palavra)) {
      hasKey = true;
      break;
    }
    if (palavra2.includes(palavra)) {
      hasKey = true;
      break;
    }
  }
  
  return hasKey;
}