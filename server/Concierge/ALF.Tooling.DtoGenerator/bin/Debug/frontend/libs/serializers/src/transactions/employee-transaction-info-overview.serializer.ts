import { TransactionInfoGroupSerializer } from "./transaction-info-group.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { EmployeeTransactionInfoOverview } from "@alf/models/transactions/employee-transaction-info-overview";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeTransactionInfoOverviewSerializer implements Serializer<EmployeeTransactionInfoOverview> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeTransactionInfoOverview
    deserialize(data: any): EmployeeTransactionInfoOverview | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.paymentDate = new Date(copy.paymentDate);

        copy.transactionInfoGroups = (copy.transactionInfoGroups || []).map(new TransactionInfoGroupSerializer().deserialize);

        return new EmployeeTransactionInfoOverview(copy);
    }

    serialize(entity: EmployeeTransactionInfoOverview | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeTransactionInfoOverview, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeTransactionInfoOverview | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeTransactionInfoOverview.typeNameHint : undefined,
            id: entity.id,
            employeeId: entity.employeeId,
            employeeNumber: entity.employeeNumber,
            employeePeriodTextId: entity.employeePeriodTextId,
            groupByEmployments: entity.groupByEmployments,
            isPeriodRange: entity.isPeriodRange,
            singlePeriodId: entity.singlePeriodId,
            periodRangeFrom: entity.periodRangeFrom,
            periodRangeUntil: entity.periodRangeUntil,
            netPayment: entity.netPayment,
            paymentDate: serializeDate(entity.paymentDate),
            transactionInfoGroups: entity.transactionInfoGroups
                ? entity.transactionInfoGroups.map(e => new TransactionInfoGroupSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
