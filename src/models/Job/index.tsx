import Category from "../Category";
import { Company } from "../Company";

export interface Metadata {
    skills?: string[];
    salary?: string;
    type?: string;
    reference?: string;
    vacancies?: number;
    nationality?: string;
    experience?: string;
}

interface Skill {
    id: number;
    skill: string;
}

export default interface Job {
    id: number;
    title: string;
    description: string;
    company: Company;
    isActive: number;
    postedBy: string;
    meta: Metadata;
    createdOn: string;
    updatedOn: string;
    category: Category;
    skills: Skill[]
}
