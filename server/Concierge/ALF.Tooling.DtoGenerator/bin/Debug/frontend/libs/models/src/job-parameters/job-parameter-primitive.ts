
import { JobParameterPrimitiveType } from "./enums/job-parameter-primitive-type";
import { JobParameter } from "@alf/models/job-parameters/job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobParameterPrimitive extends JobParameter {

    static $name = "JobParameterPrimitive";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobParameters.JobParameterPrimitive, ALF.Shared.Dto"

    type: JobParameterPrimitiveType;

    constructor(data?: Partial<JobParameterPrimitive>) {
        super(data);
        Object.assign(this, data);
        this.$type = JobParameterPrimitive.typeNameHint;
    }
}
