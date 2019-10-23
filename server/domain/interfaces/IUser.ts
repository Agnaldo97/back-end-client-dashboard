export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone?: string;
  gender?: string;
  birthDate?: Date;
  dateRegister?: Date;
}
