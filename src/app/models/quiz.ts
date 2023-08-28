import { Answer } from "./answer";
import { Classification } from "./classifications";
import { Dwrat } from "./dwrat";
import { Specialization } from "./specialization";

export class Quiz {
    id!: number;
    uuid!: number;
    content!: string;
    reference!: string;
    college!: Specialization;
    specialization!: Classification;
    term!: Dwrat;
    answers!: Answer[];
    created_at!: string;
    updated_at!: string;
}