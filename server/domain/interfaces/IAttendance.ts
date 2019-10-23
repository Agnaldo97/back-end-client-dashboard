export interface IAttendance {
    id: number;
    name: string;
    checkIn: Date;
    description?: string;
    priority?: string;
    status?: string;
    cpf?: string;
    dateRegister?: Date;
}
