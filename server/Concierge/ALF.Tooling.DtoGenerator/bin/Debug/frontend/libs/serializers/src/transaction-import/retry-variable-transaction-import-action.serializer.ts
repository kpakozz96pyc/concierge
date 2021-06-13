import { Serializer } from "@alf/core/models";
import { RetryVariableTransactionImportAction } from "@alf/models/transaction-import/retry-variable-transaction-import-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetryVariableTransactionImportActionSerializer implements Serializer<RetryVariableTransactionImportAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RetryVariableTransactionImportAction
    deserialize(data: any): RetryVariableTransactionImportAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RetryVariableTransactionImportAction(copy);
    }

    serialize(entity: RetryVariableTransactionImportAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RetryVariableTransactionImportAction, _forceTypeHint?: boolean): any
    serialize(entity: RetryVariableTransactionImportAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RetryVariableTransactionImportAction.typeNameHint : undefined,
            transactionImportId: entity.transactionImportId,
            companyId: entity.companyId,
            importDefinitionId: entity.importDefinitionId
        };
    }
}
