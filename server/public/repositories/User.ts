import { UserDTO } from "../../domain/models/UserDTO";
import { sequelize } from "../../sequelize";
import { IUser } from "../../domain/interfaces/IUser";

export async function findByEmail(parameter) {
  sequelize.addModels([UserDTO]);
  let user = await UserDTO.findOne({
    where: { email: parameter }
  });

  return user;
}

export async function create(user: IUser): Promise<UserDTO> {
  const dataNascimento: any = user.password;
  var convertData = dataNascimento
    .split("/")
    .reverse()
    .join("-");
  const response = await UserDTO.create({
    name: user.name,
    email: user.email,
    password: user.password,
    phone: user.phone,
    gender: user.gender,
    birthDate: convertData,
  });
  return response;
}