import { CompanyTagRuleActive } from "@alf/models/rules/company-tag-rule-active";
import { CompanyTagRuleAll } from "@alf/models/rules/company-tag-rule-all";
import { CompanyTagRuleCompany } from "@alf/models/rules/company-tag-rule-company";
import { CompanyTagRuleCompanyRange } from "@alf/models/rules/company-tag-rule-company-range";
import { Serializer } from "@alf/core/models";
import { CompanyTagRule } from "@alf/models/rules/company-tag-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyTagRuleSerializer implements Serializer<CompanyTagRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyTagRule
    deserialize(data: any): CompanyTagRule | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleActive, ALF.Shared.Dto")
            return new CompanyTagRuleActiveSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleAll, ALF.Shared.Dto")
            return new CompanyTagRuleAllSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleCompany, ALF.Shared.Dto")
            return new CompanyTagRuleCompanySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleCompanyRange, ALF.Shared.Dto")
            return new CompanyTagRuleCompanyRangeSerializer().deserialize(data);

        throw new Error("Unable to deserialize CompanyTagRule, cannot infer type from " + data.$type);
    }

    serialize(entity: CompanyTagRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyTagRule, _forceTypeHint?: boolean): any
    serialize(entity: CompanyTagRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleActive, ALF.Shared.Dto")
            return new CompanyTagRuleActiveSerializer().serialize(entity as CompanyTagRuleActive, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleAll, ALF.Shared.Dto")
            return new CompanyTagRuleAllSerializer().serialize(entity as CompanyTagRuleAll, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleCompany, ALF.Shared.Dto")
            return new CompanyTagRuleCompanySerializer().serialize(entity as CompanyTagRuleCompany, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Tagging.CompanyTags.Rules.CompanyTagRuleCompanyRange, ALF.Shared.Dto")
            return new CompanyTagRuleCompanyRangeSerializer().serialize(entity as CompanyTagRuleCompanyRange, _forceTypeHint);

        throw new Error("Unable to serialize CompanyTagRule, cannot infer type from " + entity.$type);
    }
}

export class CompanyTagRuleActiveSerializer implements Serializer<CompanyTagRuleActive> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyTagRuleActive
    deserialize(data: any): CompanyTagRuleActive | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyTagRuleActive(copy);
    }

    serialize(entity: CompanyTagRuleActive | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyTagRuleActive, _forceTypeHint?: boolean): any
    serialize(entity: CompanyTagRuleActive | undefined, _forceTypeHint?: boolean): any | undefined {
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

export class CompanyTagRuleAllSerializer implements Serializer<CompanyTagRuleAll> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyTagRuleAll
    deserialize(data: any): CompanyTagRuleAll | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyTagRuleAll(copy);
    }

    serialize(entity: CompanyTagRuleAll | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyTagRuleAll, _forceTypeHint?: boolean): any
    serialize(entity: CompanyTagRuleAll | undefined, _forceTypeHint?: boolean): any | undefined {
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

export class CompanyTagRuleCompanySerializer implements Serializer<CompanyTagRuleCompany> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyTagRuleCompany
    deserialize(data: any): CompanyTagRuleCompany | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyTagRuleCompany(copy);
    }

    serialize(entity: CompanyTagRuleCompany | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyTagRuleCompany, _forceTypeHint?: boolean): any
    serialize(entity: CompanyTagRuleCompany | undefined, _forceTypeHint?: boolean): any | undefined {
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

export class CompanyTagRuleCompanyRangeSerializer implements Serializer<CompanyTagRuleCompanyRange> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyTagRuleCompanyRange
    deserialize(data: any): CompanyTagRuleCompanyRange | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new CompanyTagRuleCompanyRange(copy);
    }

    serialize(entity: CompanyTagRuleCompanyRange | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyTagRuleCompanyRange, _forceTypeHint?: boolean): any
    serialize(entity: CompanyTagRuleCompanyRange | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            startingWithCompanyId: entity.startingWithCompanyId,
            endingWithCompanyId: entity.endingWithCompanyId,
            id: entity.id,
            shouldInclude: entity.shouldInclude
        };
    }
}
