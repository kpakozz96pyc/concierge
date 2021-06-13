import { EligibleOvertimeType } from "@alf/models/core/enums/eligible-overtime-type";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { Position } from "@alf/models/core/position";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PositionSerializer implements Serializer<Position> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Position
    deserialize(data: any): Position | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.disponerendeFromDate !== undefined)
            copy.disponerendeFromDate = new Date(copy.disponerendeFromDate);

        if (copy.disponerendeUntilDate !== undefined)
            copy.disponerendeUntilDate = new Date(copy.disponerendeUntilDate);

        copy.eligibleOvertime = EligibleOvertimeType[copy.eligibleOvertime];

        if (copy.pursuantFromDate !== undefined)
            copy.pursuantFromDate = new Date(copy.pursuantFromDate);

        if (copy.pursuantUntilDate !== undefined)
            copy.pursuantUntilDate = new Date(copy.pursuantUntilDate);

        return initializeDefaultValues(new Position(copy));
    }

    serialize(entity: Position | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Position, _forceTypeHint?: boolean): any
    serialize(entity: Position | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        entity! = initializeDefaultValues(entity);
        return {
            $type: _forceTypeHint ? Position.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            positionCode: entity.positionCode,
            pensionAge: entity.pensionAge,
            description: entity.description,
            stillingKode: entity.stillingKode,
            organizationCode: entity.organizationCode,
            disponerendeOrganization: entity.disponerendeOrganization,
            disponerendeFromDate: serializeDate(entity.disponerendeFromDate),
            disponerendeUntilDate: serializeDate(entity.disponerendeUntilDate),
            parentPosition: entity.parentPosition,
            eligibleOvertime: EligibleOvertimeType[entity.eligibleOvertime],
            isPursuant: entity.isPursuant,
            pursuantFromDate: serializeDate(entity.pursuantFromDate),
            pursuantUntilDate: serializeDate(entity.pursuantUntilDate),
            pursuantRestriction: entity.pursuantRestriction,
            isPositionBlocked: entity.isPositionBlocked,
            budgetedPositionPercent: entity.budgetedPositionPercent,
            budgetedYearlyRate: entity.budgetedYearlyRate,
            budgetedStepWageScaleA: entity.budgetedStepWageScaleA,
            budgetedStepWageScaleB: entity.budgetedStepWageScaleB,
            vocationCode: entity.vocationCode,
            employmentStatus: entity.employmentStatus,
            pensionCode: entity.pensionCode,
            ssbEmploymentType: entity.ssbEmploymentType,
            paiCode: entity.paiCode,
            competenceId: entity.competenceId,
            occupationStatus: entity.occupationStatus,
            subGroup: entity.subGroup,
            freeField2: entity.freeField2,
            freeField3: entity.freeField3,
            freeField4: entity.freeField4,
            auditronRule: entity.auditronRule,
            account: entity.account,
            dimensionA: entity.dimensionA,
            dimensionB: entity.dimensionB,
            dimensionC: entity.dimensionC,
            dimensionD: entity.dimensionD,
            projectDimension1: entity.projectDimension1,
            projectDimension2: entity.projectDimension2,
            projectDimension3: entity.projectDimension3,
            projectDimension4: entity.projectDimension4,
            projectDimension5: entity.projectDimension5,
            projectDimension6Amount: entity.projectDimension6Amount,
            projectDimension6Hours: entity.projectDimension6Hours,
            activityCode: entity.activityCode,
            normalPositionPercent: entity.normalPositionPercent,
            weeklyWorkHours: entity.weeklyWorkHours,
            workHoursGroupWageScaleA: entity.workHoursGroupWageScaleA,
            promotionCodeWageScaleA: entity.promotionCodeWageScaleA,
            salaryGradeWageScaleA: entity.salaryGradeWageScaleA,
            wageScaleA: entity.wageScaleA,
            stepWageScaleA: entity.stepWageScaleA,
            workHoursGroupWageScaleB: entity.workHoursGroupWageScaleB,
            promotionCodeWageScaleB: entity.promotionCodeWageScaleB,
            salaryGradeWageScaleB: entity.salaryGradeWageScaleB,
            wageScaleB: entity.wageScaleB,
            stepWageScaleB: entity.stepWageScaleB
        };
    }
}

function initializeDefaultValues(value: Position): Position {
    const model = new Position(value);
    ([
        "budgetedStepWageScaleA",
        "budgetedStepWageScaleB",
        "pensionCode",
        "paiCode",
        "occupationStatus",
        "promotionCodeWageScaleA",
        "promotionCodeWageScaleB"
    ] as PropertiesOfType<Position, number>[]).forEach(key => model[key] = (model[key] || 0) as never);

    ([
        "isPursuant",
        "isPositionBlocked"
    ] as PropertiesOfType<Position, boolean>[]).forEach(key => model[key] = model[key] || false);

    model.eligibleOvertime = model.eligibleOvertime || EligibleOvertimeType.NotDefined;
    return model;
}
