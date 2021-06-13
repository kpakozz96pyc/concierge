
import { InputParameterType } from "./enums/input-parameter-type";
import { InputParameterValue } from "../parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class InputParameter {

    static $name = "InputParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.InputParameter, ALF.Shared.Dto"

    parameterName: string;
    parameterType: InputParameterType;
    description?: string;
    optionalLabel?: string;
    optionalDisableText?: string;
    optionalEnableText?: string;
    context?: any;
    required: boolean;
    value: InputParameterValue;
    canBeOverridable: boolean;
    isOverridable: boolean;
    overrideDescription?: string;
    ordering: number;

    constructor(data?: Partial<InputParameter>) {
        Object.assign(this, data);
    }
}
