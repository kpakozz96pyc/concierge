import { FixedWidthImportDefinitionColumnSerializer } from "./fixed-width-import-definition-column.serializer";
import { CommaSeparatedImportDefinitionColumnSerializer } from "./comma-separated-import-definition-column.serializer";
import { IntegrationImportDefinitionColumnSerializer } from "./integration-import-definition-column.serializer";
import { FixedWidthImportDefinitionColumn } from "@alf/models/import/fixed-width-import-definition-column";
import { CommaSeparatedImportDefinitionColumn } from "@alf/models/import/comma-separated-import-definition-column";
import { IntegrationImportDefinitionColumn } from "@alf/models/import/integration-import-definition-column";
import { Serializer } from "@alf/core/models";
import { ImportDefinitionColumn } from "@alf/models/import/import-definition-column";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportDefinitionColumnSerializer implements Serializer<ImportDefinitionColumn> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImportDefinitionColumn
    deserialize(data: any): ImportDefinitionColumn | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Import.FixedWidthImportDefinitionColumn, ALF.Shared.Dto")
            return new FixedWidthImportDefinitionColumnSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Import.CommaSeparatedImportDefinitionColumn, ALF.Shared.Dto")
            return new CommaSeparatedImportDefinitionColumnSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Import.IntegrationImportDefinitionColumn, ALF.Shared.Dto")
            return new IntegrationImportDefinitionColumnSerializer().deserialize(data);

        throw new Error("Unable to deserialize ImportDefinitionColumn, cannot infer type from " + data.$type);
    }

    serialize(entity: ImportDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImportDefinitionColumn, _forceTypeHint?: boolean): any
    serialize(entity: ImportDefinitionColumn | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Import.FixedWidthImportDefinitionColumn, ALF.Shared.Dto")
            return new FixedWidthImportDefinitionColumnSerializer().serialize(entity as FixedWidthImportDefinitionColumn, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Import.CommaSeparatedImportDefinitionColumn, ALF.Shared.Dto")
            return new CommaSeparatedImportDefinitionColumnSerializer().serialize(entity as CommaSeparatedImportDefinitionColumn, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Import.IntegrationImportDefinitionColumn, ALF.Shared.Dto")
            return new IntegrationImportDefinitionColumnSerializer().serialize(entity as IntegrationImportDefinitionColumn, _forceTypeHint);

        throw new Error("Unable to serialize ImportDefinitionColumn, cannot infer type from " + entity.$type);
    }
}
