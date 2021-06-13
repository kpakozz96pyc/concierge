import { ScheduleValiditySelectionType } from "@alf/models/jobs/enums/schedule-validity-selection-type";
import { Serializer } from "@alf/core/models";
import { ScheduleFormulaValidityPeriod } from "@alf/models/jobs/schedule-formula-validity-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ScheduleFormulaValidityPeriodSerializer implements Serializer<ScheduleFormulaValidityPeriod> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ScheduleFormulaValidityPeriod
    deserialize(data: any): ScheduleFormulaValidityPeriod | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.hourType !== undefined)
            copy.hourType = ScheduleValiditySelectionType[copy.hourType];

        if (copy.dayTimeType !== undefined)
            copy.dayTimeType = ScheduleValiditySelectionType[copy.dayTimeType];

        return new ScheduleFormulaValidityPeriod(copy);
    }

    serialize(entity: ScheduleFormulaValidityPeriod | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ScheduleFormulaValidityPeriod, _forceTypeHint?: boolean): any
    serialize(entity: ScheduleFormulaValidityPeriod | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ScheduleFormulaValidityPeriod.typeNameHint : undefined,
            months: entity.months,
            weekDays: entity.weekDays,
            hourNumber: entity.hourNumber,
            hourType: entity.hourType !== null && entity.hourType !== undefined
                ? ScheduleValiditySelectionType[entity.hourType]
                : undefined,
            dayTimeType: entity.dayTimeType !== null && entity.dayTimeType !== undefined
                ? ScheduleValiditySelectionType[entity.dayTimeType]
                : undefined,
            fromHour: entity.fromHour,
            toHour: entity.toHour
        };
    }
}
