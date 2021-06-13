
import { FilterType } from "../core/enums/filter-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GlobalFilterContext {

    static $name = "GlobalFilterContext";
    static typeNameHint = "ALF.Shared.Dto.Models.SearchContext.GlobalFilterContext, ALF.Shared.Dto"

    type: FilterType;

    constructor(data?: Partial<GlobalFilterContext>) {
        Object.assign(this, data);
    }
}
