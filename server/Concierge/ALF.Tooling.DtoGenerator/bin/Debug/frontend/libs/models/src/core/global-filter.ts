
import { FilterType } from "./enums/filter-type";
import { FilterParameter } from "../parameter-types/filter-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type GlobalFilterId = string;

export class GlobalFilter {

    static $name = "GlobalFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.GlobalFilter, ALF.Shared.Dto"

    id: GlobalFilterId;
    companyId: string;
    type: FilterType;
    filter: FilterParameter;
    name: string;
    description: string;

    constructor(data?: Partial<GlobalFilter>) {
        Object.assign(this, data);
    }
}
