
import { FilterParameter } from "../parameter-types/filter-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PlannedPeriodText {

    static $name = "PlannedPeriodText";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.Planning.PlannedPeriodText, ALF.Shared.Dto"

    id: string;
    plannedPeriodId?: string;
    text?: string;
    filter?: FilterParameter;
    globalFilterId?: string;

    constructor(data?: Partial<PlannedPeriodText>) {
        Object.assign(this, data);
    }
}
