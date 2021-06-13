
import { InputParameterValue } from "@alf/models/parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OperatorValueParameter extends InputParameterValue {

    static $name = "OperatorValueParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.OperatorValueParameter, ALF.Shared.Dto"

    operator?: string;
    value?: any;
    overriddenValue?: any;

    constructor(data?: Partial<OperatorValueParameter>) {
        super(data);
        Object.assign(this, data);
        this.$type = OperatorValueParameter.typeNameHint;
    }
}
