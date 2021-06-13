import { AbsencePlanType } from "@alf/models/absence/enums/absence-plan-type";
import { AbsenceDaysCalculationType } from "@alf/models/absence/enums/absence-days-calculation-type";
import { AbsenceActualDaysCalculationType } from "@alf/models/absence/enums/absence-actual-days-calculation-type";
import { WeekendAndHolydayInclusionType } from "@alf/models/absence/enums/weekend-and-holyday-inclusion-type";
import { CalculateHoursType } from "@alf/models/absence/enums/calculate-hours-type";
import { ReimbursementType } from "@alf/models/absence/enums/reimbursement-type";
import { FritakFraAGPType } from "@alf/models/absence/enums/fritak-fra-agptype";
import { SpecialReimbursementType } from "@alf/models/absence/enums/special-reimbursement-type";
import { SalaryReductionType } from "@alf/models/absence/enums/salary-reduction-type";
import { TransferCategoryType } from "@alf/models/absence/enums/transfer-category-type";
import { LongTermAbsenceType } from "@alf/models/absence/enums/long-term-absence-type";
import { AbsenceType } from "@alf/models/absence/enums/absence-type";
import { AbsenceCodeAccumulatorBehavior } from "@alf/models/absence/enums/absence-code-accumulator-behavior";
import { AbsenceCodeMaskBehavior } from "@alf/models/absence/enums/absence-code-mask-behavior";
import { Serializer } from "@alf/core/models";
import { AbsenceCode } from "@alf/models/absence/absence-code";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCodeSerializer implements Serializer<AbsenceCode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCode
    deserialize(data: any): AbsenceCode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.absencePlan = AbsencePlanType[copy.absencePlan];

        copy.absenceDaysCalculation = AbsenceDaysCalculationType[copy.absenceDaysCalculation];

        copy.absenceActualDaysCalculation = AbsenceActualDaysCalculationType[copy.absenceActualDaysCalculation];

        copy.includeWeekend = WeekendAndHolydayInclusionType[copy.includeWeekend];

        copy.calculateHours = CalculateHoursType[copy.calculateHours];

        copy.reimbursementType = ReimbursementType[copy.reimbursementType];

        copy.fritakFraAGP = FritakFraAGPType[copy.fritakFraAGP];

        copy.specialReimbursement = SpecialReimbursementType[copy.specialReimbursement];

        copy.salaryReduction = SalaryReductionType[copy.salaryReduction];

        copy.transferCategory = TransferCategoryType[copy.transferCategory];

        copy.longTermAbsenceCode = LongTermAbsenceType[copy.longTermAbsenceCode];

        copy.accumulators = Object.keys(copy.accumulators).reduce((accumulator, current) => {
            accumulator[current] = AbsenceCodeAccumulatorBehavior[copy.accumulators[current]];
            return accumulator;
        }, {} as Dictionary<any>);

        copy.masks = Object.keys(copy.masks).reduce((accumulator, current) => {
            accumulator[current] = AbsenceCodeMaskBehavior[copy.masks[current]];
            return accumulator;
        }, {} as Dictionary<any>);

        copy.absenceType = AbsenceType[copy.absenceType];

        return new AbsenceCode(copy);
    }

    serialize(entity: AbsenceCode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCode, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceCode.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            code: entity.code,
            allowGraded: entity.allowGraded,
            description: entity.description,
            absencePlan: AbsencePlanType[entity.absencePlan],
            copyCodeId: entity.copyCodeId,
            followUpOnMissingDocumentation: entity.followUpOnMissingDocumentation,
            absenceDaysCalculation: AbsenceDaysCalculationType[entity.absenceDaysCalculation],
            absenceActualDaysCalculation: AbsenceActualDaysCalculationType[entity.absenceActualDaysCalculation],
            includeWeekend: WeekendAndHolydayInclusionType[entity.includeWeekend],
            calculateHours: CalculateHoursType[entity.calculateHours],
            canParticipateInReimbursement: entity.canParticipateInReimbursement,
            reimbursementType: ReimbursementType[entity.reimbursementType],
            fritakFraAGP: FritakFraAGPType[entity.fritakFraAGP],
            specialReimbursement: SpecialReimbursementType[entity.specialReimbursement],
            isChildrensIllness: entity.isChildrensIllness,
            salaryReduction: SalaryReductionType[entity.salaryReduction],
            payCodeId: entity.payCodeId,
            transferCategory: TransferCategoryType[entity.transferCategory],
            longTermAbsenceCode: LongTermAbsenceType[entity.longTermAbsenceCode],
            mergeImports: entity.mergeImports,
            runningAccumulator: entity.runningAccumulator,
            accumulators: entity.accumulators
                ? Object.keys(entity.accumulators).reduce((accumulator, current) => {
                    accumulator[current] = AbsenceCodeAccumulatorBehavior[(entity!.accumulators as any)[current]];
                    return accumulator;
                }, {} as Dictionary<any>)
                : undefined,
            masks: entity.masks
                ? Object.keys(entity.masks).reduce((accumulator, current) => {
                    accumulator[current] = AbsenceCodeMaskBehavior[(entity!.masks as any)[current]];
                    return accumulator;
                }, {} as Dictionary<any>)
                : undefined,
            absenceType: AbsenceType[entity.absenceType],
            rehabilitation: entity.rehabilitation,
            reportingCodeKS: entity.reportingCodeKS,
            reportingCodeRTV: entity.reportingCodeRTV,
            reportingCodeAD: entity.reportingCodeAD,
            reportingCodeNHO: entity.reportingCodeNHO,
            reportingCodeSSB: entity.reportingCodeSSB,
            internalReportingCode: entity.internalReportingCode,
            absenceMarkingCode: entity.absenceMarkingCode,
            absenceMarkingColor: entity.absenceMarkingColor,
            absenceCodeType: entity.absenceCodeType,
            pensionRights: entity.pensionRights,
            numberOfYearsWithPensionRights: entity.numberOfYearsWithPensionRights,
            pensionCode: entity.pensionCode,
            accountCodeId: entity.accountCodeId,
            generateFollowUp: entity.generateFollowUp,
            isIncludedInFollowUp: entity.isIncludedInFollowUp,
            supertype: entity.supertype
        };
    }
}
