import { Serializer } from "@alf/core/models";
import { SystemParameterPeriodPlanCategory } from "@alf/models/system-parameters/system-parameter-period-plan-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SystemParameterPeriodPlanCategorySerializer implements Serializer<SystemParameterPeriodPlanCategory> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SystemParameterPeriodPlanCategory
    deserialize(data: any): SystemParameterPeriodPlanCategory | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new SystemParameterPeriodPlanCategory(copy);
    }

    serialize(entity: SystemParameterPeriodPlanCategory | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SystemParameterPeriodPlanCategory, _forceTypeHint?: boolean): any
    serialize(entity: SystemParameterPeriodPlanCategory | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            payDayFormula1: entity.payDayFormula1,
            payDayFormula2: entity.payDayFormula2,
            payDayFormula3: entity.payDayFormula3,
            id: entity.id,
            code: entity.code,
            description: entity.description
        };
    }
}
