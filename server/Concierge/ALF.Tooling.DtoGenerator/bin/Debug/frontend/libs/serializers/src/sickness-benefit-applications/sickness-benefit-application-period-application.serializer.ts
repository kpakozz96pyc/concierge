import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SicknessBenefitApplicationPeriodApplication } from "@alf/models/sickness-benefit-applications/sickness-benefit-application-period-application";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SicknessBenefitApplicationPeriodApplicationSerializer implements Serializer<SicknessBenefitApplicationPeriodApplication> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SicknessBenefitApplicationPeriodApplication
    deserialize(data: any): SicknessBenefitApplicationPeriodApplication | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        return new SicknessBenefitApplicationPeriodApplication(copy);
    }

    serialize(entity: SicknessBenefitApplicationPeriodApplication | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SicknessBenefitApplicationPeriodApplication, _forceTypeHint?: boolean): any
    serialize(entity: SicknessBenefitApplicationPeriodApplication | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            activityType: entity.activityType,
            from: serializeDate(entity.from),
            to: serializeDate(entity.to)
        };
    }
}
