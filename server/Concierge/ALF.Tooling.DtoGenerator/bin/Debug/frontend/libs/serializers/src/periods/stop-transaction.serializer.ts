import { Serializer } from "@alf/core/models";
import { StopTransaction } from "@alf/models/periods/stop-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class StopTransactionSerializer implements Serializer<StopTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): StopTransaction
    deserialize(data: any): StopTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new StopTransaction(copy);
    }

    serialize(entity: StopTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: StopTransaction, _forceTypeHint?: boolean): any
    serialize(entity: StopTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? StopTransaction.typeNameHint : undefined,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            employeeId: entity.employeeId,
            positionCode: entity.positionCode,
            payCode: entity.payCode
        };
    }
}
