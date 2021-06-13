import { Serializer } from "@alf/core/models";
import { PeriodPlanningListItem } from "@alf/models/periods/period-planning-list-item";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodPlanningListItemSerializer implements Serializer<PeriodPlanningListItem> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodPlanningListItem
    deserialize(data: any): PeriodPlanningListItem | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.plannedCreationDate !== undefined)
            copy.plannedCreationDate = new Date(copy.plannedCreationDate);

        return new PeriodPlanningListItem(copy);
    }

    serialize(entity: PeriodPlanningListItem | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodPlanningListItem, _forceTypeHint?: boolean): any
    serialize(entity: PeriodPlanningListItem | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodPlanningListItem.typeNameHint : undefined,
            id: entity.id,
            description: entity.description,
            periodNumber: entity.periodNumber,
            companyId: entity.companyId,
            periodId: entity.periodId,
            periodPlanId: entity.periodPlanId,
            planningStatus: entity.planningStatus,
            planningConflictStatus: entity.planningConflictStatus,
            periodStatus: entity.periodStatus,
            isLocked: entity.isLocked,
            isDirty: entity.isDirty,
            processTemplateId: entity.processTemplateId,
            plannedCreationDate: entity.plannedCreationDate
                ? entity.plannedCreationDate.toISOString()
                : undefined
        };
    }
}
