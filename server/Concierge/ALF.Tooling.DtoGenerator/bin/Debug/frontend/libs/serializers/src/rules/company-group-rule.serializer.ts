import { CompanyGroupRuleActive } from "@alf/models/rules/company-group-rule-active";
import { CompanyGroupRuleAll } from "@alf/models/rules/company-group-rule-all";
import { CompanyGroupRuleCompany } from "@alf/models/rules/company-group-rule-company";
import { CompanyGroupRuleTag } from "@alf/models/rules/company-group-rule-tag";
import { Serializer } from "@alf/core/models";
import { CompanyGroupRule } from "@alf/models/rules/company-group-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyGroupRuleSerializer implements Serializer<CompanyGroupRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyGroupRule
    deserialize(data: any): CompanyGroupRule | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleActive, ALF.Shared.Dto")
            return new CompanyGroupRuleActiveSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleAll, ALF.Shared.Dto")
            return new CompanyGroupRuleAllSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleCompany, ALF.Shared.Dto")
            return new CompanyGroupRuleCompanySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleTag, ALF.Shared.Dto")
            return new CompanyGroupRuleTagSerializer().deserialize(data);

        throw new Error("Unable to deserialize CompanyGroupRule, cannot infer type from " + data.$type);
    }

    serialize(entity: CompanyGroupRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyGroupRule, _forceTypeHint?: boolean): any
    serialize(entity: CompanyGroupRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleActive, ALF.Shared.Dto")
            return new CompanyGroupRuleActiveSerializer().serialize(entity as CompanyGroupRuleActive, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleAll, ALF.Shared.Dto")
            return new CompanyGroupRuleAllSerializer().serialize(entity as CompanyGroupRuleAll, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleCompany, ALF.Shared.Dto")
            return new CompanyGroupRuleCompanySerializer().serialize(entity as CompanyGroupRuleCompany, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.CompanyGroup.Rules.CompanyGroupRuleTag, ALF.Shared.Dto")
            return new CompanyGroupRuleTagSerializer().serialize(entity as CompanyGroupRuleTag, _forceTypeHint);

        throw new Error("Unable to serialize CompanyGroupRule, cannot infer type from " + entity.$type);
    }
}

export class CompanyGroupRuleActiveSerializer implements Serializer<CompanyGroupRuleActive> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyGroupRuleActive
    deserialize(data: any): CompanyGroupRuleActive | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyGroupRuleActive(copy);
    }

    serialize(entity: CompanyGroupRuleActive | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyGroupRuleActive, _forceTypeHint?: boolean): any
    serialize(entity: CompanyGroupRuleActive | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            fuzzynessInDays: entity.fuzzynessInDays,
            id: entity.id,
            shouldInclude: entity.shouldInclude
        };
    }
}

export class CompanyGroupRuleAllSerializer implements Serializer<CompanyGroupRuleAll> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyGroupRuleAll
    deserialize(data: any): CompanyGroupRuleAll | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyGroupRuleAll(copy);
    }

    serialize(entity: CompanyGroupRuleAll | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyGroupRuleAll, _forceTypeHint?: boolean): any
    serialize(entity: CompanyGroupRuleAll | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            id: entity.id,
            shouldInclude: entity.shouldInclude
        };
    }
}

export class CompanyGroupRuleCompanySerializer implements Serializer<CompanyGroupRuleCompany> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyGroupRuleCompany
    deserialize(data: any): CompanyGroupRuleCompany | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyGroupRuleCompany(copy);
    }

    serialize(entity: CompanyGroupRuleCompany | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyGroupRuleCompany, _forceTypeHint?: boolean): any
    serialize(entity: CompanyGroupRuleCompany | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyId: entity.companyId,
            id: entity.id,
            shouldInclude: entity.shouldInclude
        };
    }
}

export class CompanyGroupRuleTagSerializer implements Serializer<CompanyGroupRuleTag> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyGroupRuleTag
    deserialize(data: any): CompanyGroupRuleTag | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyGroupRuleTag(copy);
    }

    serialize(entity: CompanyGroupRuleTag | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyGroupRuleTag, _forceTypeHint?: boolean): any
    serialize(entity: CompanyGroupRuleTag | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            companyTag: entity.companyTag,
            id: entity.id,
            shouldInclude: entity.shouldInclude
        };
    }
}
