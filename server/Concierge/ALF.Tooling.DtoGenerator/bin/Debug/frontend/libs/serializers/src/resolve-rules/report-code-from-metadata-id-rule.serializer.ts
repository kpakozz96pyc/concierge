import { Serializer } from "@alf/core/models";
import { ReportCodeFromMetadataIdRule } from "@alf/models/resolve-rules/report-code-from-metadata-id-rule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportCodeFromMetadataIdRuleSerializer implements Serializer<ReportCodeFromMetadataIdRule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ReportCodeFromMetadataIdRule
    deserialize(data: any): ReportCodeFromMetadataIdRule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ReportCodeFromMetadataIdRule(copy);
    }

    serialize(entity: ReportCodeFromMetadataIdRule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ReportCodeFromMetadataIdRule, _forceTypeHint?: boolean): any
    serialize(entity: ReportCodeFromMetadataIdRule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type
        };
    }
}
