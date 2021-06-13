
import { ProcessTemplateType } from "../template/enums/process-template-type";
import { MetaJobParameterMetadata } from "./meta-job-parameter-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type MetaJobMetadataId = string;

export class MetaJobMetadata {

    static $name = "MetaJobMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Jobs.MetaJobMetadata, ALF.Shared.Dto"

    id: MetaJobMetadataId;
    jobTypeName?: string;
    description?: string;
    canBeUsedAsStepJob: boolean;
    usedForProcessTemplateType: ProcessTemplateType;
    canBeUsedAsScheduledJob: boolean;
    canBeOrderedManually: boolean;
    canBeManuallyAddedToInstance: boolean;
    parameters: MetaJobParameterMetadata[] = [];

    constructor(data?: Partial<MetaJobMetadata>) {
        Object.assign(this, data);
    }
}
