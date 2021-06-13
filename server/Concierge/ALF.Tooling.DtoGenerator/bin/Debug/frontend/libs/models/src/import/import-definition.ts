
import { ImportDefinitionType } from "./enums/import-definition-type";
import { ImportDefinitionMediaType } from "./enums/import-definition-media-type";
import { ImportDefinitionDateFormat } from "./enums/import-definition-date-format";
import { ExternalCompanyIdentifierRule } from "./enums/external-company-identifier-rule";
import { ExternalEmployeeIdentifierRule } from "./enums/external-employee-identifier-rule";
import { ExternalEmploymentIdentifierRule } from "./enums/external-employment-identifier-rule";
import { ExternalPersonIdentifierRule } from "./enums/external-person-identifier-rule";
import { CommaSeparatedImportDefinitionColumn } from "./comma-separated-import-definition-column";
import { FixedWidthImportDefinitionColumn } from "./fixed-width-import-definition-column";
import { IntegrationImportDefinitionColumn } from "./integration-import-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ImportDefinitionId = string;

export class ImportDefinition {

    static $name = "ImportDefinition";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.ImportDefinition, ALF.Shared.Dto"

    id: ImportDefinitionId;
    code: string;
    companyId: string;
    type: ImportDefinitionType;
    mediaType: ImportDefinitionMediaType;
    description?: string;
    decimalSeparator: string;
    dateFormat: ImportDefinitionDateFormat;
    fieldSeparator?: string;
    headerProcessingRule: number;
    numberOfHeaderLines: number;
    footerProcessingRule: number;
    numberOfFooterLines: number;
    externalCompanyIdentifierRule?: ExternalCompanyIdentifierRule;
    externalEmployeeIdentifierRule?: ExternalEmployeeIdentifierRule;
    externalEmploymentIdentifierRule?: ExternalEmploymentIdentifierRule;
    externalPersonIdentifierRule?: ExternalPersonIdentifierRule;
    highestPeriodStateForImport?: string;
    transactionDateMode: number;
    canGenerateEmployeeNumber: boolean;
    periodTypes: string[] = [];
    commaSeparatedColumns: CommaSeparatedImportDefinitionColumn[] = [];
    fixedWidthColumns: FixedWidthImportDefinitionColumn[] = [];
    integrationColumns: IntegrationImportDefinitionColumn[] = [];

    constructor(data?: Partial<ImportDefinition>) {
        Object.assign(this, data);
    }
}
