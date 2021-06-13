
import { ControlTypeCategory } from "./enums/control-type-category";
import { InputParameter } from "../input-parameters/input-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ControlDefinitionId = string;

export class ControlDefinition {

    static $name = "ControlDefinition";
    static typeNameHint = "ALF.Shared.Dto.Models.Control.ControlDefinition, ALF.Shared.Dto"

    id: ControlDefinitionId;
    controlId: string;
    systemShipped: boolean;
    activationLocked: boolean;
    controlTypeId: string;
    controlTypeCode: string;
    categories: ControlTypeCategory[] = [];
    isDeleted: boolean;
    name: string;
    description?: string;
    canOverrideActivationForCompany: boolean;
    active: boolean;
    warningFromPeriodState?: string;
    errorFromPeriodState?: string;
    infoFromPeriodState?: string;
    parameters: InputParameter[] = [];
    filters: InputParameter[] = [];
    activeForPeriodTypes: string[] = [];

    constructor(data?: Partial<ControlDefinition>) {
        Object.assign(this, data);
    }
}
