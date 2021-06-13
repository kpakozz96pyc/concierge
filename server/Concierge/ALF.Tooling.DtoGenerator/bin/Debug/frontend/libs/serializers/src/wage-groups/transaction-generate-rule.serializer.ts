import { TransactionGenerateRuleFieldValueSerializer } from "./transaction-generate-rule-field-value.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { TransactionGenerateRule } from "@alf/models/wage-groups/transaction-generate-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TransactionGenerateRuleSerializer implements Serializer<TransactionGenerateRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TransactionGenerateRule
    deserialize(data: any): TransactionGenerateRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.validFrom !== undefined)
            copy.validFrom = new Date(copy.validFrom);

        if (copy.validUntil !== undefined)
            copy.validUntil = new Date(copy.validUntil);

        copy.fieldValues = (copy.fieldValues || []).map(new TransactionGenerateRuleFieldValueSerializer().deserialize);

        return new TransactionGenerateRule(copy);
    }

    serialize(entity: TransactionGenerateRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TransactionGenerateRule, _forceTypeHint?: boolean): any
    serialize(entity: TransactionGenerateRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TransactionGenerateRule.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            wageGroupId: entity.wageGroupId,
            payCodeNumber: entity.payCodeNumber,
            name: entity.name,
            description: entity.description,
            generateTransactionFor: entity.generateTransactionFor,
            validFrom: serializeDate(entity.validFrom),
            validUntil: serializeDate(entity.validUntil),
            fieldValues: entity.fieldValues
                ? entity.fieldValues.map(e => new TransactionGenerateRuleFieldValueSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
