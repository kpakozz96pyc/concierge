import { CompanyTagRuleSerializer } from "../rules/company-tag-rule.serializer";
import { Serializer } from "@alf/core/models";
import { CompanyTag } from "@alf/models/company-tags/company-tag";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyTagSerializer implements Serializer<CompanyTag> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyTag
    deserialize(data: any): CompanyTag | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.rules = (copy.rules || []).map(new CompanyTagRuleSerializer().deserialize);

        return new CompanyTag(copy);
    }

    serialize(entity: CompanyTag | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyTag, _forceTypeHint?: boolean): any
    serialize(entity: CompanyTag | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? CompanyTag.typeNameHint : undefined,
            id: entity.id,
            description: entity.description,
            isSystemShipped: entity.isSystemShipped,
            rules: entity.rules
                ? entity.rules.map(e => new CompanyTagRuleSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
