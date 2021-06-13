import { VariableTransactionImportHeapStatus } from "@alf/models/import/enums/variable-transaction-import-heap-status";
import { Serializer } from "@alf/core/models";
import { VariableTransactionImportHeap } from "@alf/models/import/variable-transaction-import-heap";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class VariableTransactionImportHeapSerializer implements Serializer<VariableTransactionImportHeap> {

    deserialize(data: undefined): undefined
    deserialize(data: any): VariableTransactionImportHeap
    deserialize(data: any): VariableTransactionImportHeap | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.created = new Date(copy.created);

        if (copy.generated !== undefined)
            copy.generated = new Date(copy.generated);

        if (copy.imported !== undefined)
            copy.imported = new Date(copy.imported);

        if (copy.changed !== undefined)
            copy.changed = new Date(copy.changed);

        copy.importStatus = VariableTransactionImportHeapStatus[copy.importStatus];

        return new VariableTransactionImportHeap(copy);
    }

    serialize(entity: VariableTransactionImportHeap | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: VariableTransactionImportHeap, _forceTypeHint?: boolean): any
    serialize(entity: VariableTransactionImportHeap | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? VariableTransactionImportHeap.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            heapNumber: entity.heapNumber,
            periodId: entity.periodId,
            variableTransactionImportId: entity.variableTransactionImportId,
            created: entity.created
                ? entity.created.toISOString()
                : undefined,
            generated: entity.generated
                ? entity.generated.toISOString()
                : undefined,
            imported: entity.imported
                ? entity.imported.toISOString()
                : undefined,
            description: entity.description,
            sumNumber: entity.sumNumber,
            sumHours: entity.sumHours,
            sumAmount: entity.sumAmount,
            heapModifiedIn: entity.heapModifiedIn,
            periodNumber: entity.periodNumber,
            waitingForJobId: entity.waitingForJobId,
            changed: entity.changed
                ? entity.changed.toISOString()
                : undefined,
            lastChangedBy: entity.lastChangedBy,
            importStatus: VariableTransactionImportHeapStatus[entity.importStatus],
            transactionCount: entity.transactionCount,
            employeeCount: entity.employeeCount,
            rejectedCount: entity.rejectedCount
        };
    }
}
