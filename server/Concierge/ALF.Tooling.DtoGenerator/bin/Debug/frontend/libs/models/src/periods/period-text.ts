
import { FilterParameter } from "../parameter-types/filter-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodText {

    static $name = "PeriodText";
    static typeNameHint = "ALF.Shared.Dto.Models.Periods.PeriodText, ALF.Shared.Dto"

    id: string;
    companyId: string;
    periodNumber: number;
    text?: string;
    filter?: FilterParameter;
    globalFilterId?: string;

    constructor(data?: Partial<PeriodText>) {
        Object.assign(this, data);
    }
}
