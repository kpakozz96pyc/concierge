
import { FieldCompareOperator } from "../control/enums/field-compare-operator";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterRuleValue {

    static $name = "FilterRuleValue";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FilterRuleValue, ALF.Shared.Dto"

    tableNumber: number;
    fieldNumber: number;
    operator: FieldCompareOperator;
    value?: any;

    constructor(data?: Partial<FilterRuleValue>) {
        Object.assign(this, data);
    }
}
