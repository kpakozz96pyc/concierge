
import { TargetEntityType } from "../integration/enums/target-entity-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeIntegrationDefinitionTypeContext {

    static $name = "EmployeeIntegrationDefinitionTypeContext";
    static typeNameHint = "ALF.Shared.Dto.Models.SearchContext.EmployeeIntegrationDefinitionTypeContext, ALF.Shared.Dto"

    type: TargetEntityType;

    constructor(data?: Partial<EmployeeIntegrationDefinitionTypeContext>) {
        Object.assign(this, data);
    }
}
