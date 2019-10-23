import { generateToken } from "../../middleware/auth-service";
import { ServiceError } from "../../services/ServiceError";
import * as UserRepository from "../repositories/User";

export async function login(body): Promise<Object> {
  const { email, password } = body;

  const user = await UserRepository.findByEmail(email);

  if (!user) throw new ServiceError("user-not-found");

  const realUser: any = user.get({ plain: true });

  try {
    await user.checkPassword(password);
  } catch (err){
    throw new ServiceError("invalid-password"); 
  }

  const validToken = {
    email: realUser.email
  };
  const accessToken = await generateToken(validToken);
  delete realUser.password
  realUser.accessToken = accessToken;
  return { user: realUser };
}
