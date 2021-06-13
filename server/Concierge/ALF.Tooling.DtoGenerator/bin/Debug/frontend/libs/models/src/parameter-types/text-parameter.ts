
import { InputParameterValue } from "@alf/models/parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TextParameter extends InputParameterValue {

    static $name = "TextParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.TextParameter, ALF.Shared.Dto"

    value?: string;
    overriddenValue?: string;

    constructor(data?: Partial<TextParameter>) {
        super(data);
        Object.assign(this, data);
        this.$type = TextParameter.typeNameHint;
    }
}
