
import { JobParameterStaticEnumOption } from "./job-parameter-static-enum-option";
import { JobParameter } from "@alf/models/job-parameters/job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobParameterStaticEnum extends JobParameter {

    static $name = "JobParameterStaticEnum";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobParameters.JobParameterStaticEnum, ALF.Shared.Dto"

    options: JobParameterStaticEnumOption[] = [];
    multiple: boolean;

    constructor(data?: Partial<JobParameterStaticEnum>) {
        super(data);
        Object.assign(this, data);
        this.$type = JobParameterStaticEnum.typeNameHint;
    }
}
