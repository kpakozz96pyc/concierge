import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SickChildBenefitPartialAbsenceDay } from "@alf/models/income-reports/sick-child-benefit-partial-absence-day";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SickChildBenefitPartialAbsenceDaySerializer implements Serializer<SickChildBenefitPartialAbsenceDay> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SickChildBenefitPartialAbsenceDay
    deserialize(data: any): SickChildBenefitPartialAbsenceDay | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.date = new Date(copy.date);

        return new SickChildBenefitPartialAbsenceDay(copy);
    }

    serialize(entity: SickChildBenefitPartialAbsenceDay | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SickChildBenefitPartialAbsenceDay, _forceTypeHint?: boolean): any
    serialize(entity: SickChildBenefitPartialAbsenceDay | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SickChildBenefitPartialAbsenceDay.typeNameHint : undefined,
            date: serializeDate(entity.date),
            hours: entity.hours
        };
    }
}
