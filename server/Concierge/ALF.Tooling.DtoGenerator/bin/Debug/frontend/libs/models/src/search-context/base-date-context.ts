
import { BaseDateType } from "../relative-date/enums/base-date-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BaseDateContext {

    static $name = "BaseDateContext";
    static typeNameHint = "ALF.Shared.Dto.Models.SearchContext.BaseDateContext, ALF.Shared.Dto"

    type: BaseDateType;

    constructor(data?: Partial<BaseDateContext>) {
        Object.assign(this, data);
    }
}
