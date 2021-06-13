
import { InputParameterValue } from "@alf/models/parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FieldOperatorValueParameter extends InputParameterValue {

    static $name = "FieldOperatorValueParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FieldOperatorValueParameter, ALF.Shared.Dto"

    fieldNumber?: number;
    operator?: string;
    value?: any;
    overriddenValue?: any;

    constructor(data?: Partial<FieldOperatorValueParameter>) {
        super(data);
        Object.assign(this, data);
        this.$type = FieldOperatorValueParameter.typeNameHint;
    }
}
