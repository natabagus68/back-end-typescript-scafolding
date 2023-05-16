import { ResumeCheck } from "../models/resume-check";

export interface ResumeCheckRepository {
    store(props: ResumeCheck): Promise<ResumeCheck>;
}
