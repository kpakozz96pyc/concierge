import { FinanceTransferHeapParameterOverrideElementSerializer } from "./finance-transfer-heap-parameter-override-element.serializer";
import { Serializer } from "@alf/core/models";
import { FinanceTransferHeapParameterOverride } from "@alf/models/transfers/finance-transfer-heap-parameter-override";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceTransferHeapParameterOverrideSerializer implements Serializer<FinanceTransferHeapParameterOverride> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FinanceTransferHeapParameterOverride
    deserialize(data: any): FinanceTransferHeapParameterOverride | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.overrides = (copy.overrides || []).map(new FinanceTransferHeapParameterOverrideElementSerializer().deserialize);

        return new FinanceTransferHeapParameterOverride(copy);
    }

    serialize(entity: FinanceTransferHeapParameterOverride | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FinanceTransferHeapParameterOverride, _forceTypeHint?: boolean): any
    serialize(entity: FinanceTransferHeapParameterOverride | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FinanceTransferHeapParameterOverride.typeNameHint : undefined,
            overrides: entity.overrides
                ? entity.overrides.map(e => new FinanceTransferHeapParameterOverrideElementSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
