import { Serializer } from "@alf/core/models";
import { TransactionActionResponse } from "@alf/models/transactions/transaction-action-response";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionActionResponseSerializer implements Serializer<TransactionActionResponse> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TransactionActionResponse
    deserialize(data: any): TransactionActionResponse | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TransactionActionResponse(copy);
    }

    serialize(entity: TransactionActionResponse | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TransactionActionResponse, _forceTypeHint?: boolean): any
    serialize(entity: TransactionActionResponse | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TransactionActionResponse.typeNameHint : undefined,
            employeeId: entity.employeeId,
            periodId: entity.periodId,
            positionId: entity.positionId,
            jobId: entity.jobId
        };
    }
}
