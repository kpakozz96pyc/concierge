import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { WorkAnniversary } from "@alf/models/special-occasion/work-anniversary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkAnniversarySerializer implements Serializer<WorkAnniversary> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkAnniversary
    deserialize(data: any): WorkAnniversary | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.date = new Date(copy.date);

        return new WorkAnniversary(copy);
    }

    serialize(entity: WorkAnniversary | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkAnniversary, _forceTypeHint?: boolean): any
    serialize(entity: WorkAnniversary | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            employmentId: entity.employmentId,
            isFiveYearAnniversary: entity.isFiveYearAnniversary,
            isTenYearAnniversary: entity.isTenYearAnniversary,
            employeeId: entity.employeeId,
            name: entity.name,
            date: serializeDate(entity.date),
            years: entity.years
        };
    }
}
