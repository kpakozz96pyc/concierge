import { AbsoluteOffsetSerializer } from "./absolute-offset.serializer";
import { RelativeOffsetSerializer } from "./relative-offset.serializer";
import { WorkdayOffsetSerializer } from "./workday-offset.serializer";
import { AbsoluteOffset } from "@alf/models/relative-date/absolute-offset";
import { RelativeOffset } from "@alf/models/relative-date/relative-offset";
import { WorkdayOffset } from "@alf/models/relative-date/workday-offset";
import { Serializer } from "@alf/core/models";
import { DateOffset } from "@alf/models/relative-date/date-offset";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DateOffsetSerializer implements Serializer<DateOffset> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DateOffset
    deserialize(data: any): DateOffset | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.RelativeDate.AbsoluteOffset, ALF.Shared.Dto")
            return new AbsoluteOffsetSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.RelativeDate.RelativeOffset, ALF.Shared.Dto")
            return new RelativeOffsetSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.RelativeDate.WorkdayOffset, ALF.Shared.Dto")
            return new WorkdayOffsetSerializer().deserialize(data);

        throw new Error("Unable to deserialize DateOffset, cannot infer type from " + data.$type);
    }

    serialize(entity: DateOffset | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DateOffset, _forceTypeHint?: boolean): any
    serialize(entity: DateOffset | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.RelativeDate.AbsoluteOffset, ALF.Shared.Dto")
            return new AbsoluteOffsetSerializer().serialize(entity as AbsoluteOffset, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.RelativeDate.RelativeOffset, ALF.Shared.Dto")
            return new RelativeOffsetSerializer().serialize(entity as RelativeOffset, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.RelativeDate.WorkdayOffset, ALF.Shared.Dto")
            return new WorkdayOffsetSerializer().serialize(entity as WorkdayOffset, _forceTypeHint);

        throw new Error("Unable to serialize DateOffset, cannot infer type from " + entity.$type);
    }
}
