
import { ProcessTemplateType } from "../template/enums/process-template-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessTemplateExtendedInformation {

    static $name = "ProcessTemplateExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.ProcessTemplateExtendedInformation, ALF.Shared.Dto"

    isSystemShipped: boolean;
    description?: string;
    processTemplateType: ProcessTemplateType;

    constructor(data?: Partial<ProcessTemplateExtendedInformation>) {
        Object.assign(this, data);
    }
}
