
import { FilterRuleValue } from "./filter-rule-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterRule {

    static $name = "FilterRule";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FilterRule, ALF.Shared.Dto"

    id: string;
    isOverridable: boolean;
    overrideDescription?: string;
    value: FilterRuleValue;

    constructor(data?: Partial<FilterRule>) {
        Object.assign(this, data);
    }
}
