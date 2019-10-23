export interface IPatient {
    id: number;
    name: string;
    cpf: string;
    planType: string;
    phone?: string;
    planNumber?: string;
    birthDate?: Date
}
