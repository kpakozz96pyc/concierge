import { Serializer } from "@alf/core/models";
import { WorkdayOffset } from "@alf/models/relative-date/workday-offset";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkdayOffsetSerializer implements Serializer<WorkdayOffset> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkdayOffset
    deserialize(data: any): WorkdayOffset | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkdayOffset(copy);
    }

    serialize(entity: WorkdayOffset | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkdayOffset, _forceTypeHint?: boolean): any
    serialize(entity: WorkdayOffset | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            direction: entity.direction
        };
    }
}
