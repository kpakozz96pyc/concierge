import { AmeldingMonthlySubmissionStatus } from "@alf/models/amelding/enums/amelding-monthly-submission-status";
import { Serializer } from "@alf/core/models";
import { AmeldingMonthlySubmission } from "@alf/models/amelding/amelding-monthly-submission";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingMonthlySubmissionSerializer implements Serializer<AmeldingMonthlySubmission> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AmeldingMonthlySubmission
    deserialize(data: any): AmeldingMonthlySubmission | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = AmeldingMonthlySubmissionStatus[copy.status];

        return new AmeldingMonthlySubmission(copy);
    }

    serialize(entity: AmeldingMonthlySubmission | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AmeldingMonthlySubmission, _forceTypeHint?: boolean): any
    serialize(entity: AmeldingMonthlySubmission | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            unreportedPeriods: entity.unreportedPeriods,
            id: entity.id,
            companyId: entity.companyId,
            description: entity.description,
            month: entity.month,
            year: entity.year,
            status: AmeldingMonthlySubmissionStatus[entity.status],
            canGenerateNewAmelding: entity.canGenerateNewAmelding,
            whyCantIGenerateNewAmelding: entity.whyCantIGenerateNewAmelding
        };
    }
}
