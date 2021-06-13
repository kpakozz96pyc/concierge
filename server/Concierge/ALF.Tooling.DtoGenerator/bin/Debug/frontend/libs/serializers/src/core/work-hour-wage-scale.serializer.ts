import { Serializer } from "@alf/core/models";
import { WorkHourWageScale } from "@alf/models/core/work-hour-wage-scale";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkHourWageScaleSerializer implements Serializer<WorkHourWageScale> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkHourWageScale
    deserialize(data: any): WorkHourWageScale | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkHourWageScale(copy);
    }

    serialize(entity: WorkHourWageScale | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkHourWageScale, _forceTypeHint?: boolean): any
    serialize(entity: WorkHourWageScale | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WorkHourWageScale.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            groupNumber: entity.groupNumber,
            yearlyWorkHours: entity.yearlyWorkHours,
            yearlyWeeks: entity.yearlyWeeks,
            weeklyWorkHours: entity.weeklyWorkHours
        };
    }
}
