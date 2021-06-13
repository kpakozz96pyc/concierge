
import { PeriodStatus } from "../periods/enums/period-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodStatusContext {

    static $name = "PeriodStatusContext";
    static typeNameHint = "ALF.Shared.Dto.Models.SearchContext.PeriodStatusContext, ALF.Shared.Dto"

    periodStatus: PeriodStatus;

    constructor(data?: Partial<PeriodStatusContext>) {
        Object.assign(this, data);
    }
}
