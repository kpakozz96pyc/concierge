
import { PeriodPlanningStatus } from "./enums/period-planning-status";
import { PeriodPlanningConflictStatus } from "./enums/period-planning-conflict-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type PeriodPlanningListItemId = string;

export class PeriodPlanningListItem {

    static $name = "PeriodPlanningListItem";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.PeriodPlanningListItem, ALF.Shared.Dto"

    id: PeriodPlanningListItemId;
    description: string;
    periodNumber: number;
    companyId: string;
    periodId: string;
    periodPlanId?: string;
    planningStatus: PeriodPlanningStatus;
    planningConflictStatus?: PeriodPlanningConflictStatus;
    periodStatus?: string;
    isLocked: boolean;
    isDirty: boolean;
    processTemplateId?: string;
    plannedCreationDate?: Date;

    constructor(data?: Partial<PeriodPlanningListItem>) {
        Object.assign(this, data);
    }
}
