
import { BusinessRuleSeverity } from "./enums/business-rule-severity";
import { AltinnEntity } from "./enums/altinn-entity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BusinessRule {

    static $name = "BusinessRule";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.BusinessRule, ALF.Shared.Dto"

    id?: string;
    name?: string;
    details?: string;
    suggestedSolution?: string;
    severity: BusinessRuleSeverity;
    altinnEntity: AltinnEntity;

    constructor(data?: Partial<BusinessRule>) {
        Object.assign(this, data);
    }
}
