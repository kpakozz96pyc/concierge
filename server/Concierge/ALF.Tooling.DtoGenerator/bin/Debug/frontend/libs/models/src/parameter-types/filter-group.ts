
import { FilterCondition } from "./enums/filter-condition";
import { FilterRule } from "./filter-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterGroup {

    static $name = "FilterGroup";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FilterGroup, ALF.Shared.Dto"

    id: string;
    condition: FilterCondition;
    groups: FilterGroup[] = [];
    rules: FilterRule[] = [];

    constructor(data?: Partial<FilterGroup>) {
        Object.assign(this, data);
    }
}
