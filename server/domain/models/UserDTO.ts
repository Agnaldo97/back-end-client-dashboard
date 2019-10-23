import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  BeforeCreate
} from "sequelize-typescript";
import * as bcrypt from "../../services/bcrypt";
import { IUser } from "../interfaces/IUser";

@Table({ modelName: "users" })
export class UserDTO extends Model<UserDTO> implements IUser {
  @AutoIncrement
  @PrimaryKey
  @Column
  id!: number;

  @Column
  name!: string;

  @Column
  email!: string;

  @Column
  password!: string;

  @Column
  phone?: string;

  @Column
  gender?: string;

  @Column({ field: "birth_date" })
  birthDate?: Date;

  @Column({ field: "register_date" })
  dateRegister?: Date;

  @BeforeCreate
  public static async setPassword(user: { password: string }): Promise<void> {
    const hash = await bcrypt.hash(user.password);
    user.password = hash;
  }
  public checkPassword(password: string): Promise<void> {
    return bcrypt.compare(this.password, password);
  }
}
