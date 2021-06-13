import { Serializer } from "@alf/core/models";
import { TransactionFieldInput } from "@alf/models/transactions/transaction-field-input";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionFieldInputSerializer implements Serializer<TransactionFieldInput> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TransactionFieldInput
    deserialize(data: any): TransactionFieldInput | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TransactionFieldInput(copy);
    }

    serialize(entity: TransactionFieldInput | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TransactionFieldInput, _forceTypeHint?: boolean): any
    serialize(entity: TransactionFieldInput | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TransactionFieldInput.typeNameHint : undefined,
            id: entity.id,
            lookupId: entity.lookupId,
            isRequired: entity.isRequired
        };
    }
}
