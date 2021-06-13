import { AmeldingMonthlySubmissionStatus } from "@alf/models/amelding/enums/amelding-monthly-submission-status";
import { AmeldingMonthlySubmissionSerializer } from "./amelding-monthly-submission.serializer";
import { AmeldingMonthlySubmission } from "@alf/models/amelding/amelding-monthly-submission";
import { Serializer } from "@alf/core/models";
import { AmeldingMonthlySubmissionBase } from "@alf/models/amelding/amelding-monthly-submission-base";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingMonthlySubmissionBaseSerializer implements Serializer<AmeldingMonthlySubmissionBase> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AmeldingMonthlySubmissionBase
    deserialize(data: any): AmeldingMonthlySubmissionBase | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Amelding.AmeldingMonthlySubmission, ALF.Shared.Dto")
            return new AmeldingMonthlySubmissionSerializer().deserialize(data);

        const copy = { ...data };
        copy.status = AmeldingMonthlySubmissionStatus[copy.status];

        return new AmeldingMonthlySubmissionBase(copy);
    }

    serialize(entity: AmeldingMonthlySubmissionBase | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AmeldingMonthlySubmissionBase, _forceTypeHint?: boolean): any
    serialize(entity: AmeldingMonthlySubmissionBase | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Amelding.AmeldingMonthlySubmission, ALF.Shared.Dto")
            return new AmeldingMonthlySubmissionSerializer().serialize(entity as AmeldingMonthlySubmission, _forceTypeHint);

        return {
            $type: _forceTypeHint ? AmeldingMonthlySubmissionBase.typeNameHint : undefined,
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
