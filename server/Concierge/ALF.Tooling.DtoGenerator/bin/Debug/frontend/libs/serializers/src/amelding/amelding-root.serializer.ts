import { AmeldingStatus } from "@alf/models/amelding/enums/amelding-status";
import { Serializer } from "@alf/core/models";
import { AmeldingRoot } from "@alf/models/amelding/amelding-root";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingRootSerializer implements Serializer<AmeldingRoot> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AmeldingRoot
    deserialize(data: any): AmeldingRoot | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.status = AmeldingStatus[copy.status];

        if (copy.generatedAt !== undefined)
            copy.generatedAt = new Date(copy.generatedAt);

        if (copy.sentAt !== undefined)
            copy.sentAt = new Date(copy.sentAt);

        if (copy.receivedFeedbackAt !== undefined)
            copy.receivedFeedbackAt = new Date(copy.receivedFeedbackAt);

        if (copy.orderedAt !== undefined)
            copy.orderedAt = new Date(copy.orderedAt);

        return new AmeldingRoot(copy);
    }

    serialize(entity: AmeldingRoot | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AmeldingRoot, _forceTypeHint?: boolean): any
    serialize(entity: AmeldingRoot | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AmeldingRoot.typeNameHint : undefined,
            id: entity.id,
            encodedId: entity.encodedId,
            companyId: entity.companyId,
            year: entity.year,
            month: entity.month,
            replacingAmeldingId: entity.replacingAmeldingId,
            status: AmeldingStatus[entity.status],
            waitingForJobId: entity.waitingForJobId,
            hasPendingJob: entity.hasPendingJob,
            generatedBy: entity.generatedBy,
            generatedAt: entity.generatedAt
                ? entity.generatedAt.toISOString()
                : undefined,
            sentAt: entity.sentAt
                ? entity.sentAt.toISOString()
                : undefined,
            receivedFeedbackAt: entity.receivedFeedbackAt
                ? entity.receivedFeedbackAt.toISOString()
                : undefined,
            isDraft: entity.isDraft,
            isBlank: entity.isBlank,
            containsPaymentInfo: entity.containsPaymentInfo,
            canBeErased: entity.canBeErased,
            whyCantItBeErased: entity.whyCantItBeErased,
            canBeReplaced: entity.canBeReplaced,
            whyCantItBeReplaced: entity.whyCantItBeReplaced,
            reportingForPayrollPeriods: entity.reportingForPayrollPeriods,
            orderedAt: entity.orderedAt
                ? entity.orderedAt.toISOString()
                : undefined
        };
    }
}
