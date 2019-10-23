import {
    Model,
    Column,
    Table,
    PrimaryKey,
    AutoIncrement
} from "sequelize-typescript";
import { IAttendance } from "../interfaces/IAttendance";

@Table({ modelName: "attendances" })
export class AttendanceDTO extends Model<AttendanceDTO> implements IAttendance {
    @AutoIncrement
    @PrimaryKey
    @Column
    id!: number;

    @Column
    name!: string;

    @Column({ field: "check_in" })
    checkIn!: Date

    @Column
    description?: string;

    @Column
    priority?: string;

    @Column
    status?: string;

    @Column
    cpf?: string;
    
    @Column({ field: "date_register" })
    dateRegister?: Date;

}