
import { ExternalCompanyIdentifierRule } from "../import/enums/external-company-identifier-rule";
import { ExternalEmployeeIdentifierRule } from "../import/enums/external-employee-identifier-rule";
import { ExternalEmploymentIdentifierRule } from "../import/enums/external-employment-identifier-rule";
import { ExternalPersonIdentifierRule } from "../import/enums/external-person-identifier-rule";
import { EmployeeIntegrationDefinitionColumn } from "./employee-integration-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeIntegrationDefinitionId = string;

export class EmployeeIntegrationDefinition {

    static $name = "EmployeeIntegrationDefinition";
    static typeNameHint = "ALF.Shared.Dto.Models.Integration.EmployeeIntegrationDefinition, ALF.Shared.Dto"

    id: EmployeeIntegrationDefinitionId;
    code?: string;
    description?: string;
    externalCompanyIdentifierRule?: ExternalCompanyIdentifierRule;
    externalEmployeeIdentifierRule?: ExternalEmployeeIdentifierRule;
    externalEmploymentIdentifierRule?: ExternalEmploymentIdentifierRule;
    externalPersonIdentifierRule?: ExternalPersonIdentifierRule;
    canGenerateEmployeeNumber: boolean;
    columns: EmployeeIntegrationDefinitionColumn[] = [];

    constructor(data?: Partial<EmployeeIntegrationDefinition>) {
        Object.assign(this, data);
    }
}
