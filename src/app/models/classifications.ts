import { Specialization } from "./specialization";

export class Classification {
    id!: number;
    uuid!: number;
    name!: string;
    specialization!: Specialization;
    // has_master!: number;
    // has_graduation!: number;
    created_at!: string;
    updated_at!: string;
}