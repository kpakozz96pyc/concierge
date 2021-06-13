import { VariableTransactionImportStatus } from "@alf/models/import/enums/variable-transaction-import-status";
import { Serializer } from "@alf/core/models";
import { VariableTransactionImport } from "@alf/models/import/variable-transaction-import";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class VariableTransactionImportSerializer implements Serializer<VariableTransactionImport> {

    deserialize(data: undefined): undefined
    deserialize(data: any): VariableTransactionImport
    deserialize(data: any): VariableTransactionImport | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.changed = new Date(copy.changed);

        copy.status = VariableTransactionImportStatus[copy.status];

        return new VariableTransactionImport(copy);
    }

    serialize(entity: VariableTransactionImport | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: VariableTransactionImport, _forceTypeHint?: boolean): any
    serialize(entity: VariableTransactionImport | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? VariableTransactionImport.typeNameHint : undefined,
            id: entity.id,
            source: entity.source,
            contextCompanyId: entity.contextCompanyId,
            directImport: entity.directImport,
            earliestImportPeriodNumber: entity.earliestImportPeriodNumber,
            heapCount: entity.heapCount,
            transactionCount: entity.transactionCount,
            importedTransactionCount: entity.importedTransactionCount,
            rejectedTransactionCount: entity.rejectedTransactionCount,
            deletedTransactionCount: entity.deletedTransactionCount,
            sumNumber: entity.sumNumber,
            sumHours: entity.sumHours,
            sumAmount: entity.sumAmount,
            changed: entity.changed
                ? entity.changed.toISOString()
                : undefined,
            lastChangedBy: entity.lastChangedBy,
            isAutoImport: entity.isAutoImport,
            containsCompanyIds: entity.containsCompanyIds,
            importDefinitionCompanyId: entity.importDefinitionCompanyId,
            importDefinitionId: entity.importDefinitionId,
            status: VariableTransactionImportStatus[entity.status],
            waitingForJobId: entity.waitingForJobId,
            companyCount: entity.companyCount
        };
    }
}
