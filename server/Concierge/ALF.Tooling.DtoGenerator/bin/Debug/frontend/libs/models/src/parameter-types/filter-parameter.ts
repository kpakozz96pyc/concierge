
import { FilterGroup } from "./filter-group";
import { InputParameterValue } from "@alf/models/parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FilterParameter extends InputParameterValue {

    static $name = "FilterParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FilterParameter, ALF.Shared.Dto"

    value: FilterGroup;
    description?: string;

    constructor(data?: Partial<FilterParameter>) {
        super(data);
        Object.assign(this, data);
        this.$type = FilterParameter.typeNameHint;
    }
}
