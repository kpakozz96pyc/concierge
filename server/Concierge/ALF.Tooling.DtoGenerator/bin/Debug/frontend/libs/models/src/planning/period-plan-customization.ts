
import { CustomizeWhenRule } from "../customization/customize-when-rule";
import { PeriodPlanCustomizableFields } from "./period-plan-customizable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanCustomization {

    static $name = "PeriodPlanCustomization";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.PeriodPlanCustomization, ALF.Shared.Dto"

    periodPlanId?: string;
    companyId?: string;
    description?: string;
    whenRule?: CustomizeWhenRule;
    overriddenFields?: PeriodPlanCustomizableFields;

    constructor(data?: Partial<PeriodPlanCustomization>) {
        Object.assign(this, data);
    }
}
