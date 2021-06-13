
import { ControlTypeCategory } from "./enums/control-type-category";
import { InputParameter } from "../input-parameters/input-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ControlTypeId = string;

export class ControlType {

    static $name = "ControlType";
    static typeNameHint = "ALF.Shared.Dto.Models.Control.ControlType, ALF.Shared.Dto"

    id: ControlTypeId;
    code: string;
    name: string;
    description?: string;
    isInstanceable: boolean;
    parameters: InputParameter[] = [];
    filters: InputParameter[] = [];
    categories: ControlTypeCategory[] = [];

    constructor(data?: Partial<ControlType>) {
        Object.assign(this, data);
    }
}
