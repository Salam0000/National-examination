import { Collage } from "./collage";

export class Specialization {
    id!: number;
    uuid!: number;
    logo!: string;
    name!: string;
    collage!: Collage;
    is_master!: boolean;
    created_at!: string;
    updated_at!: string;
}