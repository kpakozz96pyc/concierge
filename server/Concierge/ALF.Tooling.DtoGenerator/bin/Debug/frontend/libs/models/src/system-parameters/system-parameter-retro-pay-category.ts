
import { SystemParameterCategory } from "@alf/models/system-parameters/system-parameter-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SystemParameterRetroPayCategoryId = string;

export class SystemParameterRetroPayCategory extends SystemParameterCategory {

    static $name = "SystemParameterRetroPayCategory";
    static typeNameHint = "ALF.Shared.Dto.Models.SystemParameters.SystemParameterRetroPayCategory, ALF.Shared.Dto"

    numberOfMonthsBackToRetroPay?: number;

    constructor(data?: Partial<SystemParameterRetroPayCategory>) {
        super(data);
        Object.assign(this, data);
        this.$type = SystemParameterRetroPayCategory.typeNameHint;
    }
}
