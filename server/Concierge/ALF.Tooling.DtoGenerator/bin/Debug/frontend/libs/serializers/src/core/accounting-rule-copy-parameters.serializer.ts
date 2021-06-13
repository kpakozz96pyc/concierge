import { Serializer } from "@alf/core/models";
import { AccountingRuleCopyParameters } from "@alf/models/core/accounting-rule-copy-parameters";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccountingRuleCopyParametersSerializer implements Serializer<AccountingRuleCopyParameters> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AccountingRuleCopyParameters
    deserialize(data: any): AccountingRuleCopyParameters | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AccountingRuleCopyParameters(copy);
    }

    serialize(entity: AccountingRuleCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AccountingRuleCopyParameters, _forceTypeHint?: boolean): any
    serialize(entity: AccountingRuleCopyParameters | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AccountingRuleCopyParameters.typeNameHint : undefined,
            copyFromId: entity.copyFromId,
            copyToAccountingRuleCode: entity.copyToAccountingRuleCode,
            description: entity.description
        };
    }
}
