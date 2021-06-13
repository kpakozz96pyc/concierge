
import { RuntimeFieldDataType } from "../database-metadata/enums/runtime-field-data-type";
import { JobParameter } from "@alf/models/job-parameters/job-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class JobParameterAvailableValues extends JobParameter {

    static $name = "JobParameterAvailableValues";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.JobParameters.JobParameterAvailableValues, ALF.Shared.Dto"

    providesCompanyContext: boolean;
    needsCompanyContext: boolean;
    linkType: string;
    linkReference: string;
    multiple: boolean;
    dataType: RuntimeFieldDataType;

    constructor(data?: Partial<JobParameterAvailableValues>) {
        super(data);
        Object.assign(this, data);
        this.$type = JobParameterAvailableValues.typeNameHint;
    }
}
