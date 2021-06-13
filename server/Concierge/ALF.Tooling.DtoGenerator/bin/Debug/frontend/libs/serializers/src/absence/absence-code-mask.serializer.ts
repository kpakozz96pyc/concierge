import { AbsenceCodeMaskBehavior } from "@alf/models/absence/enums/absence-code-mask-behavior";
import { Serializer } from "@alf/core/models";
import { AbsenceCodeMask } from "@alf/models/absence/absence-code-mask";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCodeMaskSerializer implements Serializer<AbsenceCodeMask> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCodeMask
    deserialize(data: any): AbsenceCodeMask | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.numbers = AbsenceCodeMaskBehavior[copy.numbers];

        copy.voucherNumber = AbsenceCodeMaskBehavior[copy.voucherNumber];

        copy.time = AbsenceCodeMaskBehavior[copy.time];

        copy.absenceType = AbsenceCodeMaskBehavior[copy.absenceType];

        copy.absenceCause = AbsenceCodeMaskBehavior[copy.absenceCause];

        copy.department = AbsenceCodeMaskBehavior[copy.department];

        copy.reelDays = AbsenceCodeMaskBehavior[copy.reelDays];

        copy.positionNumber = AbsenceCodeMaskBehavior[copy.positionNumber];

        copy.absencePercent = AbsenceCodeMaskBehavior[copy.absencePercent];

        copy.endDate = AbsenceCodeMaskBehavior[copy.endDate];

        copy.occurance = AbsenceCodeMaskBehavior[copy.occurance];

        copy.hours = AbsenceCodeMaskBehavior[copy.hours];

        copy.socialOffice = AbsenceCodeMaskBehavior[copy.socialOffice];

        copy.week = AbsenceCodeMaskBehavior[copy.week];

        copy.amount = AbsenceCodeMaskBehavior[copy.amount];

        copy.accountingLedgerType = AbsenceCodeMaskBehavior[copy.accountingLedgerType];

        copy.accountingCodeVat = AbsenceCodeMaskBehavior[copy.accountingCodeVat];

        copy.appendixCodeAccounting = AbsenceCodeMaskBehavior[copy.appendixCodeAccounting];

        copy.appendixTypeAccounting = AbsenceCodeMaskBehavior[copy.appendixTypeAccounting];

        copy.dimentionA = AbsenceCodeMaskBehavior[copy.dimentionA];

        copy.dimentionB = AbsenceCodeMaskBehavior[copy.dimentionB];

        copy.dimentionC = AbsenceCodeMaskBehavior[copy.dimentionC];

        copy.dimentionD = AbsenceCodeMaskBehavior[copy.dimentionD];

        copy.accountCodeId = AbsenceCodeMaskBehavior[copy.accountCodeId];

        copy.accountCode = AbsenceCodeMaskBehavior[copy.accountCode];

        copy.projectDimention1 = AbsenceCodeMaskBehavior[copy.projectDimention1];

        copy.rate = AbsenceCodeMaskBehavior[copy.rate];

        copy.projectDimention2 = AbsenceCodeMaskBehavior[copy.projectDimention2];

        copy.projectDimention3 = AbsenceCodeMaskBehavior[copy.projectDimention3];

        copy.projectDimention4 = AbsenceCodeMaskBehavior[copy.projectDimention4];

        copy.projectDimention5 = AbsenceCodeMaskBehavior[copy.projectDimention5];

        copy.projectDimentionAmount = AbsenceCodeMaskBehavior[copy.projectDimentionAmount];

        copy.projectDimentionHours = AbsenceCodeMaskBehavior[copy.projectDimentionHours];

        copy.workRelated = AbsenceCodeMaskBehavior[copy.workRelated];

        copy.activityCode = AbsenceCodeMaskBehavior[copy.activityCode];

        return new AbsenceCodeMask(copy);
    }

    serialize(entity: AbsenceCodeMask | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCodeMask, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCodeMask | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceCodeMask.typeNameHint : undefined,
            numbers: AbsenceCodeMaskBehavior[entity.numbers],
            voucherNumber: AbsenceCodeMaskBehavior[entity.voucherNumber],
            time: AbsenceCodeMaskBehavior[entity.time],
            absenceType: AbsenceCodeMaskBehavior[entity.absenceType],
            absenceCause: AbsenceCodeMaskBehavior[entity.absenceCause],
            department: AbsenceCodeMaskBehavior[entity.department],
            reelDays: AbsenceCodeMaskBehavior[entity.reelDays],
            positionNumber: AbsenceCodeMaskBehavior[entity.positionNumber],
            absencePercent: AbsenceCodeMaskBehavior[entity.absencePercent],
            endDate: AbsenceCodeMaskBehavior[entity.endDate],
            occurance: AbsenceCodeMaskBehavior[entity.occurance],
            hours: AbsenceCodeMaskBehavior[entity.hours],
            socialOffice: AbsenceCodeMaskBehavior[entity.socialOffice],
            week: AbsenceCodeMaskBehavior[entity.week],
            amount: AbsenceCodeMaskBehavior[entity.amount],
            accountingLedgerType: AbsenceCodeMaskBehavior[entity.accountingLedgerType],
            accountingCodeVat: AbsenceCodeMaskBehavior[entity.accountingCodeVat],
            appendixCodeAccounting: AbsenceCodeMaskBehavior[entity.appendixCodeAccounting],
            appendixTypeAccounting: AbsenceCodeMaskBehavior[entity.appendixTypeAccounting],
            dimentionA: AbsenceCodeMaskBehavior[entity.dimentionA],
            dimentionB: AbsenceCodeMaskBehavior[entity.dimentionB],
            dimentionC: AbsenceCodeMaskBehavior[entity.dimentionC],
            dimentionD: AbsenceCodeMaskBehavior[entity.dimentionD],
            accountCodeId: AbsenceCodeMaskBehavior[entity.accountCodeId],
            accountCode: AbsenceCodeMaskBehavior[entity.accountCode],
            projectDimention1: AbsenceCodeMaskBehavior[entity.projectDimention1],
            rate: AbsenceCodeMaskBehavior[entity.rate],
            projectDimention2: AbsenceCodeMaskBehavior[entity.projectDimention2],
            projectDimention3: AbsenceCodeMaskBehavior[entity.projectDimention3],
            projectDimention4: AbsenceCodeMaskBehavior[entity.projectDimention4],
            projectDimention5: AbsenceCodeMaskBehavior[entity.projectDimention5],
            projectDimentionAmount: AbsenceCodeMaskBehavior[entity.projectDimentionAmount],
            projectDimentionHours: AbsenceCodeMaskBehavior[entity.projectDimentionHours],
            workRelated: AbsenceCodeMaskBehavior[entity.workRelated],
            activityCode: AbsenceCodeMaskBehavior[entity.activityCode]
        };
    }
}
