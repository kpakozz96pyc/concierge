import { Serializer } from "@alf/core/models";
import { BankTransferHeapNavigationAction } from "@alf/models/work/bank-transfer-heap-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankTransferHeapNavigationActionSerializer implements Serializer<BankTransferHeapNavigationAction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BankTransferHeapNavigationAction
    deserialize(data: any): BankTransferHeapNavigationAction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BankTransferHeapNavigationAction(copy);
    }

    serialize(entity: BankTransferHeapNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BankTransferHeapNavigationAction, _forceTypeHint?: boolean): any
    serialize(entity: BankTransferHeapNavigationAction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            heapId: entity.heapId
        };
    }
}
