import { Serializer } from "@alf/core/models";
import { ImportAction } from "@alf/models/import/import-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportActionSerializer implements Serializer<ImportAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImportAction
    deserialize(data: any): ImportAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ImportAction(copy);
    }

    serialize(entity: ImportAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImportAction, _forceTypeHint?: boolean): any
    serialize(entity: ImportAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            periodId: entity.periodId,
            variableTransactionImportHeapId: entity.variableTransactionImportHeapId,
            transactionIds: entity.transactionIds
        };
    }
}
