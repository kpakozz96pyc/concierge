import { Serializer } from "@alf/core/models";
import { CompanyFromProcessPlanRule } from "@alf/models/resolve-rules/company-from-process-plan-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyFromProcessPlanRuleSerializer implements Serializer<CompanyFromProcessPlanRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyFromProcessPlanRule
    deserialize(data: any): CompanyFromProcessPlanRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyFromProcessPlanRule(copy);
    }

    serialize(entity: CompanyFromProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyFromProcessPlanRule, _forceTypeHint?: boolean): any
    serialize(entity: CompanyFromProcessPlanRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
