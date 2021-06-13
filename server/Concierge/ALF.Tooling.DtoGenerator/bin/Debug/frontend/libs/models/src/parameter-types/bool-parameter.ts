
import { InputParameterValue } from "@alf/models/parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BoolParameter extends InputParameterValue {

    static $name = "BoolParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.BoolParameter, ALF.Shared.Dto"

    value?: boolean;
    overriddenValue?: boolean;

    constructor(data?: Partial<BoolParameter>) {
        super(data);
        Object.assign(this, data);
        this.$type = BoolParameter.typeNameHint;
    }
}
