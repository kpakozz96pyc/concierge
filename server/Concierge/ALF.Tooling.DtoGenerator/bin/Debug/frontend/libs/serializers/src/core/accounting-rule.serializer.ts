import { Serializer } from "@alf/core/models";
import { AccountingRule } from "@alf/models/core/accounting-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccountingRuleSerializer implements Serializer<AccountingRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AccountingRule
    deserialize(data: any): AccountingRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return initializeDefaultValues(new AccountingRule(copy));
    }

    serialize(entity: AccountingRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AccountingRule, _forceTypeHint?: boolean): any
    serialize(entity: AccountingRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        entity! = initializeDefaultValues(entity);
        return {
            $type: _forceTypeHint ? AccountingRule.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            code: entity.code,
            description: entity.description,
            bankAccountType: entity.bankAccountType,
            mvaCode: entity.mvaCode,
            accountingVoucherCode: entity.accountingVoucherCode,
            accountingVoucherType: entity.accountingVoucherType,
            rules: entity.rules,
            deleted: entity.deleted
        };
    }
}

function initializeDefaultValues(value: AccountingRule): AccountingRule {
    const model = new AccountingRule(value);
    ([
        "bankAccountType"
    ] as PropertiesOfType<AccountingRule, number>[]).forEach(key => model[key] = (model[key] || 0) as never);

    ([
        "deleted"
    ] as PropertiesOfType<AccountingRule, boolean>[]).forEach(key => model[key] = model[key] || false);


    return model;
}
