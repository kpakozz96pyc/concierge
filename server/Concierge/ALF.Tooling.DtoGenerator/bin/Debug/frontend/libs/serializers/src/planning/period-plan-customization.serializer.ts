import { CustomizeWhenRuleSerializer } from "../customization/customize-when-rule.serializer";
import { PeriodPlanCustomizableFieldsSerializer } from "./period-plan-customizable-fields.serializer";
import { Serializer } from "@alf/core/models";
import { PeriodPlanCustomization } from "@alf/models/planning/period-plan-customization";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanCustomizationSerializer implements Serializer<PeriodPlanCustomization> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodPlanCustomization
    deserialize(data: any): PeriodPlanCustomization | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.whenRule = new CustomizeWhenRuleSerializer().deserialize(copy.whenRule);

        copy.overriddenFields = new PeriodPlanCustomizableFieldsSerializer().deserialize(copy.overriddenFields);

        return new PeriodPlanCustomization(copy);
    }

    serialize(entity: PeriodPlanCustomization | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodPlanCustomization, _forceTypeHint?: boolean): any
    serialize(entity: PeriodPlanCustomization | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodPlanCustomization.typeNameHint : undefined,
            periodPlanId: entity.periodPlanId,
            companyId: entity.companyId,
            description: entity.description,
            whenRule: new CustomizeWhenRuleSerializer().serialize(entity.whenRule, _forceTypeHint),
            overriddenFields: new PeriodPlanCustomizableFieldsSerializer().serialize(entity.overriddenFields, _forceTypeHint)
        };
    }
}
