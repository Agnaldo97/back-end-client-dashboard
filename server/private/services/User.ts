import * as UserRepository from "../repositories/User";
import { UserDTO } from "../../domain/models/UserDTO";
import { IUser } from "../../domain/interfaces/IUser";
import { ServiceError } from "../../services/ServiceError";

export async function create(user: IUser): Promise<UserDTO> {
  const response = await UserRepository.create(user);
  return response;
}

export async function listAllUsers(): Promise<UserDTO[]> {
  const response: UserDTO[] = await UserRepository.listAllUsers();
  return response;
}

export async function deleteUser(idUser): Promise<void> {
  await UserRepository.deleteUser(idUser);
}

export async function verifyEmail(email): Promise<void> {
  const response = await UserRepository.verifyEmail(email);
  if (response) throw new ServiceError("email-in-use");
}

