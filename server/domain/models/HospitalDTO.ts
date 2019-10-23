import {
    Model,
    Column,
    Table,
    PrimaryKey,
    AutoIncrement
} from "sequelize-typescript";
import { IHospital } from "../interfaces/IHospital";

@Table({ modelName: "hospitals" })
export class HospitalDTO extends Model<HospitalDTO> implements IHospital {
    @AutoIncrement
    @PrimaryKey
    @Column
    id!: number;

    @Column
    name!: string;

    @Column
    lat!: string

    @Column
    long?: string;

    @Column
    address?: string;

    @Column
    phone?: string;
}