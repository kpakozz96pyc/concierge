import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationEducation } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-education";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationEducationSerializer implements Serializer<SicknessBenefitApplicationEducation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationEducation
    deserialize(data: any): SicknessBenefitApplicationEducation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        return new SicknessBenefitApplicationEducation(copy);
    }

    serialize(entity: SicknessBenefitApplicationEducation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationEducation, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationEducation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SicknessBenefitApplicationEducation.typeNameHint : undefined,
            from: serializeDate(entity.from),
            isFulltime: entity.isFulltime
        };
    }
}
