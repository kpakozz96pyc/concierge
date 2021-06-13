import { ScheduledJobScheduleModelSerializer } from "./scheduled-job-schedule-model.serializer";
import { Serializer } from "@alf/core/models";
import { ScheduledJobSchedule } from "@alf/models/jobs/scheduled-job-schedule";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ScheduledJobScheduleSerializer implements Serializer<ScheduledJobSchedule> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ScheduledJobSchedule
    deserialize(data: any): ScheduledJobSchedule | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.model = new ScheduledJobScheduleModelSerializer().deserialize(copy.model);

        return new ScheduledJobSchedule(copy);
    }

    serialize(entity: ScheduledJobSchedule | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ScheduledJobSchedule, _forceTypeHint?: boolean): any
    serialize(entity: ScheduledJobSchedule | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ScheduledJobSchedule.typeNameHint : undefined,
            formula: entity.formula,
            nextRuns: entity.nextRuns,
            isFormRepresented: entity.isFormRepresented,
            model: new ScheduledJobScheduleModelSerializer().serialize(entity.model, _forceTypeHint)
        };
    }
}
