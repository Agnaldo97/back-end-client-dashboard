import * as UserRepository from "../repositories/User";
import { UserDTO } from "../../domain/models/UserDTO";
import { IUser } from "../../domain/interfaces/IUser";
import { ServiceError } from "../../services/ServiceError";

export async function create(user: IUser): Promise<UserDTO> {
  const response = await UserRepository.create(user);
  return response;
}

export async function getUser(email: string): Promise<String> {
  let user: UserDTO = undefined;
  if (email != undefined && email != "") {
    user = await UserRepository.findByEmail(email);
  }
  if (user !== undefined && user !== null) {
    throw new ServiceError("invalid-data");
  }
  return "Autorizado";
}
