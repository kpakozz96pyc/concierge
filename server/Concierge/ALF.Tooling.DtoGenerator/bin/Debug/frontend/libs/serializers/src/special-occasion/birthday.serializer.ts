import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { Birthday } from "@alf/models/special-occasion/birthday";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BirthdaySerializer implements Serializer<Birthday> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Birthday
    deserialize(data: any): Birthday | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.date = new Date(copy.date);

        return new Birthday(copy);
    }

    serialize(entity: Birthday | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Birthday, _forceTypeHint?: boolean): any
    serialize(entity: Birthday | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            isFiveYearSomething: entity.isFiveYearSomething,
            isTenYearSomething: entity.isTenYearSomething,
            employeeId: entity.employeeId,
            name: entity.name,
            date: serializeDate(entity.date),
            years: entity.years
        };
    }
}
