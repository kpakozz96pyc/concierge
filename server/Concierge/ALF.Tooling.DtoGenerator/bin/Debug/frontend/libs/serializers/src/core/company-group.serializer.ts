import { CompanyGroupRuleSerializer } from "../rules/company-group-rule.serializer";
import { Serializer } from "@alf/core/models";
import { CompanyGroup } from "@alf/models/core/company-group";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyGroupSerializer implements Serializer<CompanyGroup> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyGroup
    deserialize(data: any): CompanyGroup | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.rules = (copy.rules || []).map(new CompanyGroupRuleSerializer().deserialize);

        return new CompanyGroup(copy);
    }

    serialize(entity: CompanyGroup | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyGroup, _forceTypeHint?: boolean): any
    serialize(entity: CompanyGroup | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? CompanyGroup.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            name: entity.name,
            rules: entity.rules
                ? entity.rules.map(e => new CompanyGroupRuleSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
