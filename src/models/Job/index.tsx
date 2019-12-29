interface Metadata {
    skills?: string[];
    salary?: string;
    type?: string;
    reference?: string;
    vacancies?: number;
    nationality?: string;
    experience?: string;
}

export default interface Job {
    id: number;
    title: string;
    description: string;
    company: string;
    location: string;
    metadata: Metadata;
}
