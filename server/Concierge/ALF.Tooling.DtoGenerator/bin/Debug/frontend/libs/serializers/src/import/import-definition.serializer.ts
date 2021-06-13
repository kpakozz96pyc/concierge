import { ImportDefinitionType } from "@alf/models/import/enums/import-definition-type";
import { ImportDefinitionMediaType } from "@alf/models/import/enums/import-definition-media-type";
import { ImportDefinitionDateFormat } from "@alf/models/import/enums/import-definition-date-format";
import { CommaSeparatedImportDefinitionColumnSerializer } from "./comma-separated-import-definition-column.serializer";
import { FixedWidthImportDefinitionColumnSerializer } from "./fixed-width-import-definition-column.serializer";
import { IntegrationImportDefinitionColumnSerializer } from "./integration-import-definition-column.serializer";
import { Serializer } from "@alf/core/models";
import { ImportDefinition } from "@alf/models/import/import-definition";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportDefinitionSerializer implements Serializer<ImportDefinition> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImportDefinition
    deserialize(data: any): ImportDefinition | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = ImportDefinitionType[copy.type];

        copy.mediaType = ImportDefinitionMediaType[copy.mediaType];

        copy.dateFormat = ImportDefinitionDateFormat[copy.dateFormat];

        copy.commaSeparatedColumns = (copy.commaSeparatedColumns || []).map(new CommaSeparatedImportDefinitionColumnSerializer().deserialize);

        copy.fixedWidthColumns = (copy.fixedWidthColumns || []).map(new FixedWidthImportDefinitionColumnSerializer().deserialize);

        copy.integrationColumns = (copy.integrationColumns || []).map(new IntegrationImportDefinitionColumnSerializer().deserialize);

        return new ImportDefinition(copy);
    }

    serialize(entity: ImportDefinition | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImportDefinition, _forceTypeHint?: boolean): any
    serialize(entity: ImportDefinition | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ImportDefinition.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            companyId: entity.companyId,
            type: ImportDefinitionType[entity.type],
            mediaType: ImportDefinitionMediaType[entity.mediaType],
            description: entity.description,
            decimalSeparator: entity.decimalSeparator,
            dateFormat: ImportDefinitionDateFormat[entity.dateFormat],
            fieldSeparator: entity.fieldSeparator,
            headerProcessingRule: entity.headerProcessingRule,
            numberOfHeaderLines: entity.numberOfHeaderLines,
            footerProcessingRule: entity.footerProcessingRule,
            numberOfFooterLines: entity.numberOfFooterLines,
            externalCompanyIdentifierRule: entity.externalCompanyIdentifierRule,
            externalEmployeeIdentifierRule: entity.externalEmployeeIdentifierRule,
            externalEmploymentIdentifierRule: entity.externalEmploymentIdentifierRule,
            externalPersonIdentifierRule: entity.externalPersonIdentifierRule,
            highestPeriodStateForImport: entity.highestPeriodStateForImport,
            transactionDateMode: entity.transactionDateMode,
            canGenerateEmployeeNumber: entity.canGenerateEmployeeNumber,
            periodTypes: entity.periodTypes,
            commaSeparatedColumns: entity.commaSeparatedColumns
                ? entity.commaSeparatedColumns.map(e => new CommaSeparatedImportDefinitionColumnSerializer().serialize(e, _forceTypeHint))
                : undefined,
            fixedWidthColumns: entity.fixedWidthColumns
                ? entity.fixedWidthColumns.map(e => new FixedWidthImportDefinitionColumnSerializer().serialize(e, _forceTypeHint))
                : undefined,
            integrationColumns: entity.integrationColumns
                ? entity.integrationColumns.map(e => new IntegrationImportDefinitionColumnSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
