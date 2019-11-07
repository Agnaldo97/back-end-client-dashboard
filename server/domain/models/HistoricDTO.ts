import {
    Model,
    Column,
    Table,
    PrimaryKey,
    AutoIncrement
} from "sequelize-typescript";
import { IHistoric } from "../interfaces/IHistoric";

@Table({ modelName: "historic" })
export class HistoricDTO extends Model<HistoricDTO> implements IHistoric{
    @AutoIncrement
    @PrimaryKey
    @Column
    id!: number;

    @Column
    priority?: string;

    @Column({ field: "check_in" })
    checkIn?: Date
    
    @Column({ field: "start_attendance" })
    startAttendance?: Date

    @Column({ field: "rgb_priority" })
    rgbPiority?: string;

    @Column({ field: "id_patient" })
    idPatient?: number;

    @Column({ field: "id_attendance" })
    idAttendance?: number;

}