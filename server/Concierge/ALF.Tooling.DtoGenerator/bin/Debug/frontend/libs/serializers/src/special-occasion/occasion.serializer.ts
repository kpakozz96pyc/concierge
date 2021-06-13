import { BirthdaySerializer } from "./birthday.serializer";
import { WorkAnniversarySerializer } from "./work-anniversary.serializer";
import { Birthday } from "@alf/models/special-occasion/birthday";
import { WorkAnniversary } from "@alf/models/special-occasion/work-anniversary";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { Occasion } from "@alf/models/special-occasion/occasion";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OccasionSerializer implements Serializer<Occasion> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Occasion
    deserialize(data: any): Occasion | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.SpecialOccasion.Birthday, ALF.Shared.Dto")
            return new BirthdaySerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.SpecialOccasion.WorkAnniversary, ALF.Shared.Dto")
            return new WorkAnniversarySerializer().deserialize(data);

        const copy = { ...data };
        copy.date = new Date(copy.date);

        return new Occasion(copy);
    }

    serialize(entity: Occasion | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Occasion, _forceTypeHint?: boolean): any
    serialize(entity: Occasion | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.SpecialOccasion.Birthday, ALF.Shared.Dto")
            return new BirthdaySerializer().serialize(entity as Birthday, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.SpecialOccasion.WorkAnniversary, ALF.Shared.Dto")
            return new WorkAnniversarySerializer().serialize(entity as WorkAnniversary, _forceTypeHint);

        return {
            $type: _forceTypeHint ? Occasion.typeNameHint : undefined,
            employeeId: entity.employeeId,
            name: entity.name,
            date: serializeDate(entity.date),
            years: entity.years
        };
    }
}
