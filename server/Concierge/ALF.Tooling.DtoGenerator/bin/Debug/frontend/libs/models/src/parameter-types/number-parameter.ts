
import { InputParameterValue } from "@alf/models/parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NumberParameter extends InputParameterValue {

    static $name = "NumberParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.NumberParameter, ALF.Shared.Dto"

    value?: number;
    overriddenValue?: number;

    constructor(data?: Partial<NumberParameter>) {
        super(data);
        Object.assign(this, data);
        this.$type = NumberParameter.typeNameHint;
    }
}
