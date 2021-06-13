import { WebTransactionStatus } from "@alf/models/transactions/enums/web-transaction-status";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { WebTransactionInfo } from "@alf/models/transactions/web-transaction-info";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WebTransactionInfoSerializer implements Serializer<WebTransactionInfo> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WebTransactionInfo
    deserialize(data: any): WebTransactionInfo | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.startDate !== undefined)
            copy.startDate = new Date(copy.startDate);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        copy.status = WebTransactionStatus[copy.status];

        return new WebTransactionInfo(copy);
    }

    serialize(entity: WebTransactionInfo | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WebTransactionInfo, _forceTypeHint?: boolean): any
    serialize(entity: WebTransactionInfo | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WebTransactionInfo.typeNameHint : undefined,
            id: entity.id,
            payCodeNumber: entity.payCodeNumber,
            description: entity.description,
            startDate: serializeDate(entity.startDate),
            endDate: serializeDate(entity.endDate),
            employeeId: entity.employeeId,
            quantity: entity.quantity,
            amount: entity.amount,
            hours: entity.hours,
            rate: entity.rate,
            status: WebTransactionStatus[entity.status],
            employeeName: entity.employeeName
        };
    }
}
