import { Serializer } from "@alf/core/models";
import { AccountingDimensionLookupRule } from "@alf/models/core/accounting-dimension-lookup-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccountingDimensionLookupRuleSerializer implements Serializer<AccountingDimensionLookupRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AccountingDimensionLookupRule
    deserialize(data: any): AccountingDimensionLookupRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AccountingDimensionLookupRule(copy);
    }

    serialize(entity: AccountingDimensionLookupRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AccountingDimensionLookupRule, _forceTypeHint?: boolean): any
    serialize(entity: AccountingDimensionLookupRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AccountingDimensionLookupRule.typeNameHint : undefined,
            fieldNumber: entity.fieldNumber,
            dim: entity.dim,
            retrievedFrom: entity.retrievedFrom,
            formula: entity.formula
        };
    }
}
