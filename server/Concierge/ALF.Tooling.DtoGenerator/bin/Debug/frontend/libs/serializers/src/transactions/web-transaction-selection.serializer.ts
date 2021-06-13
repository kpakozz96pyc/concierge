import { Serializer } from "@alf/core/models";
import { WebTransactionSelection } from "@alf/models/transactions/web-transaction-selection";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WebTransactionSelectionSerializer implements Serializer<WebTransactionSelection> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WebTransactionSelection
    deserialize(data: any): WebTransactionSelection | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WebTransactionSelection(copy);
    }

    serialize(entity: WebTransactionSelection | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WebTransactionSelection, _forceTypeHint?: boolean): any
    serialize(entity: WebTransactionSelection | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WebTransactionSelection.typeNameHint : undefined,
            transactionIds: entity.transactionIds
        };
    }
}
