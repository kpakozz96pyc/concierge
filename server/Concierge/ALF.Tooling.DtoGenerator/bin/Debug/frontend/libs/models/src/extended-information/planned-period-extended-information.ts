
import { PeriodPlanningStatus } from "../periods/enums/period-planning-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PlannedPeriodExtendedInformation {

    static $name = "PlannedPeriodExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.PlannedPeriodExtendedInformation, ALF.Shared.Dto"

    periodPlanId?: string;
    payDate: Date;
    isPeriodCreated: boolean;
    planningStatus: PeriodPlanningStatus;

    constructor(data?: Partial<PlannedPeriodExtendedInformation>) {
        Object.assign(this, data);
    }
}
