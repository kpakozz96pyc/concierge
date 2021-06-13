import { Serializer } from "@alf/core/models";
import { BankTransferHeapNumberFromPeriodProcessResolveRule } from "@alf/models/resolve-rules/bank-transfer-heap-number-from-period-process-resolve-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BankTransferHeapNumberFromPeriodProcessResolveRuleSerializer implements Serializer<BankTransferHeapNumberFromPeriodProcessResolveRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BankTransferHeapNumberFromPeriodProcessResolveRule
    deserialize(data: any): BankTransferHeapNumberFromPeriodProcessResolveRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new BankTransferHeapNumberFromPeriodProcessResolveRule(copy);
    }

    serialize(entity: BankTransferHeapNumberFromPeriodProcessResolveRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BankTransferHeapNumberFromPeriodProcessResolveRule, _forceTypeHint?: boolean): any
    serialize(entity: BankTransferHeapNumberFromPeriodProcessResolveRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
