import { UserDTO } from "../../domain/models/UserDTO";
import { IUser } from "../../domain/interfaces/IUser";

export async function create(user: IUser): Promise<UserDTO> {
  const dataNascimento: any = user.birthDate;
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

export async function listAllUsers(): Promise<UserDTO[]> {
  const response: UserDTO[] = await UserDTO.findAll();
  return response;
}

export async function verifyEmail(email): Promise<UserDTO> {
  const response: UserDTO = await UserDTO.findOne({
    where: {
      email
    }
  });
  return response;
}

export async function deleteUser(idUser): Promise<void> {
  await UserDTO.destroy({
    where: {
      id: idUser
    }
  });
}