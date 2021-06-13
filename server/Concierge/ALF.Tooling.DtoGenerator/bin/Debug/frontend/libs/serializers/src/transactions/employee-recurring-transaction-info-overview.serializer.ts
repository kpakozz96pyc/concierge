import { TransactionInfoGroupSerializer } from "./transaction-info-group.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { EmployeeRecurringTransactionInfoOverview } from "@alf/models/transactions/employee-recurring-transaction-info-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeRecurringTransactionInfoOverviewSerializer implements Serializer<EmployeeRecurringTransactionInfoOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeRecurringTransactionInfoOverview
    deserialize(data: any): EmployeeRecurringTransactionInfoOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.fromDate !== undefined)
            copy.fromDate = new Date(copy.fromDate);

        copy.transactionInfoGroups = (copy.transactionInfoGroups || []).map(new TransactionInfoGroupSerializer().deserialize);

        return new EmployeeRecurringTransactionInfoOverview(copy);
    }

    serialize(entity: EmployeeRecurringTransactionInfoOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeRecurringTransactionInfoOverview, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeRecurringTransactionInfoOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeRecurringTransactionInfoOverview.typeNameHint : undefined,
            id: entity.id,
            employeeId: entity.employeeId,
            showAll: entity.showAll,
            fromDate: serializeDate(entity.fromDate),
            transactionInfoGroups: entity.transactionInfoGroups
                ? entity.transactionInfoGroups.map(e => new TransactionInfoGroupSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
