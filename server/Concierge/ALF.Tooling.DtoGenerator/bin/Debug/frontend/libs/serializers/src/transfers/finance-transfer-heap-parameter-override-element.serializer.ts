import { Serializer } from "@alf/core/models";
import { FinanceTransferHeapParameterOverrideElement } from "@alf/models/transfers/finance-transfer-heap-parameter-override-element";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceTransferHeapParameterOverrideElementSerializer implements Serializer<FinanceTransferHeapParameterOverrideElement> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FinanceTransferHeapParameterOverrideElement
    deserialize(data: any): FinanceTransferHeapParameterOverrideElement | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new FinanceTransferHeapParameterOverrideElement(copy);
    }

    serialize(entity: FinanceTransferHeapParameterOverrideElement | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FinanceTransferHeapParameterOverrideElement, _forceTypeHint?: boolean): any
    serialize(entity: FinanceTransferHeapParameterOverrideElement | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FinanceTransferHeapParameterOverrideElement.typeNameHint : undefined,
            sortOrder: entity.sortOrder,
            value: entity.value
        };
    }
}
