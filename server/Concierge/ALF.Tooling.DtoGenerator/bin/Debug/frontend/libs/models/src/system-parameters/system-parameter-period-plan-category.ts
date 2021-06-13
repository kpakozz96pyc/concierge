
import { SystemParameterCategory } from "@alf/models/system-parameters/system-parameter-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SystemParameterPeriodPlanCategoryId = string;

export class SystemParameterPeriodPlanCategory extends SystemParameterCategory {

    static $name = "SystemParameterPeriodPlanCategory";
    static typeNameHint = "ALF.Shared.Dto.Models.SystemParameters.SystemParameterPeriodPlanCategory, ALF.Shared.Dto"

    payDayFormula1?: string;
    payDayFormula2?: string;
    payDayFormula3?: string;

    constructor(data?: Partial<SystemParameterPeriodPlanCategory>) {
        super(data);
        Object.assign(this, data);
        this.$type = SystemParameterPeriodPlanCategory.typeNameHint;
    }
}
