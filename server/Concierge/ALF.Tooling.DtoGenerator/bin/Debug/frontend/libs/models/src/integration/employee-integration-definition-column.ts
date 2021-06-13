
import { TargetEntityType } from "./enums/target-entity-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeIntegrationDefinitionColumn {

    static $name = "EmployeeIntegrationDefinitionColumn";
    static typeNameHint = "ALF.Shared.Dto.Models.Integration.EmployeeIntegrationDefinitionColumn, ALF.Shared.Dto"

    tableNumber: number;
    fieldNumber: number;
    reference?: string;
    rank: number;
    value?: string;
    replacementId?: string;
    targetEntity: TargetEntityType;

    constructor(data?: Partial<EmployeeIntegrationDefinitionColumn>) {
        Object.assign(this, data);
    }
}
