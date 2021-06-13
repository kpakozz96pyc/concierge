import { JobScheduleFormulaFrequencyType } from "@alf/models/jobs/enums/job-schedule-formula-frequency-type";
import { ScheduleFormulaValidityPeriodSerializer } from "./schedule-formula-validity-period.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { ScheduledJobScheduleModel } from "@alf/models/jobs/scheduled-job-schedule-model";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ScheduledJobScheduleModelSerializer implements Serializer<ScheduledJobScheduleModel> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ScheduledJobScheduleModel
    deserialize(data: any): ScheduledJobScheduleModel | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.frequency !== undefined)
            copy.frequency = JobScheduleFormulaFrequencyType[copy.frequency];

        if (copy.date !== undefined)
            copy.date = new Date(copy.date);

        copy.validityPeriod = new ScheduleFormulaValidityPeriodSerializer().deserialize(copy.validityPeriod);

        return new ScheduledJobScheduleModel(copy);
    }

    serialize(entity: ScheduledJobScheduleModel | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ScheduledJobScheduleModel, _forceTypeHint?: boolean): any
    serialize(entity: ScheduledJobScheduleModel | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ScheduledJobScheduleModel.typeNameHint : undefined,
            frequency: entity.frequency !== null && entity.frequency !== undefined
                ? JobScheduleFormulaFrequencyType[entity.frequency]
                : undefined,
            date: serializeDate(entity.date),
            day: entity.day,
            weekDay: entity.weekDay,
            month: entity.month,
            ordinalDay: entity.ordinalDay,
            time: entity.time,
            minutes: entity.minutes,
            staggerPeriod: entity.staggerPeriod,
            validityPeriod: new ScheduleFormulaValidityPeriodSerializer().serialize(entity.validityPeriod, _forceTypeHint)
        };
    }
}
