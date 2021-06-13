import { Serializer } from "@alf/core/models";
import { TransactionGenerateRuleFieldValue } from "@alf/models/wage-groups/transaction-generate-rule-field-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionGenerateRuleFieldValueSerializer implements Serializer<TransactionGenerateRuleFieldValue> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TransactionGenerateRuleFieldValue
    deserialize(data: any): TransactionGenerateRuleFieldValue | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new TransactionGenerateRuleFieldValue(copy);
    }

    serialize(entity: TransactionGenerateRuleFieldValue | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TransactionGenerateRuleFieldValue, _forceTypeHint?: boolean): any
    serialize(entity: TransactionGenerateRuleFieldValue | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TransactionGenerateRuleFieldValue.typeNameHint : undefined,
            transactionGenerateRuleId: entity.transactionGenerateRuleId,
            forFieldNumber: entity.forFieldNumber,
            valueResolveType: entity.valueResolveType,
            value: entity.value,
            lookupFromTableNumber: entity.lookupFromTableNumber,
            lookupFromFieldNumber: entity.lookupFromFieldNumber
        };
    }
}
