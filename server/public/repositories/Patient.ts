import { PatientDTO } from "../../domain/models/PatientDTO";
import { sequelize } from "../../sequelize";

export async function findByCpf(cpf) {
  sequelize.addModels([PatientDTO]);
  let user = await PatientDTO.findOne({
    where: { cpf: cpf }
  });

  return user;
}
