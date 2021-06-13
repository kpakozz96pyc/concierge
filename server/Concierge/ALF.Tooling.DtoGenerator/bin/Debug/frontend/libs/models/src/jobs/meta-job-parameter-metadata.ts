
import { MetaJobParameterType } from "./enums/meta-job-parameter-type";
import { ResolveRule } from "./enums/resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MetaJobParameterMetadata {

    static $name = "MetaJobParameterMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.MetaJobParameterMetadata, ALF.Shared.Dto"

    id: string;
    description?: string;
    parameterType: MetaJobParameterType;
    stepJobResolveRule: ResolveRule;
    scheduledJobResolveRule: ResolveRule;
    defaultValue?: any;

    constructor(data?: Partial<MetaJobParameterMetadata>) {
        Object.assign(this, data);
    }
}
