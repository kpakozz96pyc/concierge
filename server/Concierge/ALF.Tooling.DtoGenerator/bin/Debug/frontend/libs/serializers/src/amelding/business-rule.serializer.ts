import { BusinessRuleSeverity } from "@alf/models/amelding/enums/business-rule-severity";
import { Serializer } from "@alf/core/models";
import { BusinessRule } from "@alf/models/amelding/business-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BusinessRuleSerializer implements Serializer<BusinessRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BusinessRule
    deserialize(data: any): BusinessRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.severity = BusinessRuleSeverity[copy.severity];

        return new BusinessRule(copy);
    }

    serialize(entity: BusinessRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BusinessRule, _forceTypeHint?: boolean): any
    serialize(entity: BusinessRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BusinessRule.typeNameHint : undefined,
            id: entity.id,
            name: entity.name,
            details: entity.details,
            suggestedSolution: entity.suggestedSolution,
            severity: BusinessRuleSeverity[entity.severity],
            altinnEntity: entity.altinnEntity
        };
    }
}
