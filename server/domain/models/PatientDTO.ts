import {
    Model,
    Column,
    Table,
    PrimaryKey,
    AutoIncrement
} from "sequelize-typescript";
import { IPatient } from "../interfaces/IPatient";

@Table({ modelName: "patients" })
export class PatientDTO extends Model<PatientDTO> implements IPatient {
    @AutoIncrement
    @PrimaryKey
    @Column
    id!: number;

    @Column
    name!: string;

    @Column

    cpf: string;
    @Column

    planType: string;
    @Column

    phone?: string;

    @Column({ field: "plan_number" })
    planNumber?: string;

    @Column({ field: "birth_date" })
    birthDate?: Date;
}
