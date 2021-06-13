import { InputTransactionSerializer } from "./input-transaction.serializer";
import { InternalFileUploadSerializer } from "../internal-file-upload/internal-file-upload.serializer";
import { Serializer } from "@alf/core/models";
import { NewInputTransaction } from "@alf/models/transactions/new-input-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewInputTransactionSerializer implements Serializer<NewInputTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewInputTransaction
    deserialize(data: any): NewInputTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.newInputTransactionFields = new InputTransactionSerializer().deserialize(copy.newInputTransactionFields);

        copy.attachments = (copy.attachments || []).map(new InternalFileUploadSerializer().deserialize);

        return new NewInputTransaction(copy);
    }

    serialize(entity: NewInputTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewInputTransaction, _forceTypeHint?: boolean): any
    serialize(entity: NewInputTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? NewInputTransaction.typeNameHint : undefined,
            inputTransactionType: entity.inputTransactionType,
            companyId: entity.companyId,
            periodId: entity.periodId,
            employeeId: entity.employeeId,
            payCodeId: entity.payCodeId,
            isPersonal: entity.isPersonal,
            employmentId: entity.employmentId,
            positionId: entity.positionId,
            newInputTransactionFields: new InputTransactionSerializer().serialize(entity.newInputTransactionFields, _forceTypeHint),
            attachments: entity.attachments
                ? entity.attachments.map(e => new InternalFileUploadSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
