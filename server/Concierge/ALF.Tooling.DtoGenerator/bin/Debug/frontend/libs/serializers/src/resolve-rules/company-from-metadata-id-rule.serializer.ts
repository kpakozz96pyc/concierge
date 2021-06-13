import { Serializer } from "@alf/core/models";
import { CompanyFromMetadataIdRule } from "@alf/models/resolve-rules/company-from-metadata-id-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyFromMetadataIdRuleSerializer implements Serializer<CompanyFromMetadataIdRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyFromMetadataIdRule
    deserialize(data: any): CompanyFromMetadataIdRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyFromMetadataIdRule(copy);
    }

    serialize(entity: CompanyFromMetadataIdRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyFromMetadataIdRule, _forceTypeHint?: boolean): any
    serialize(entity: CompanyFromMetadataIdRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
