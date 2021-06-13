
import { SystemParameterCategory } from "@alf/models/system-parameters/system-parameter-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SystemParameterTaxInformationCategoryId = string;

export class SystemParameterTaxInformationCategory extends SystemParameterCategory {

    static $name = "SystemParameterTaxInformationCategory";
    static typeNameHint = "ALF.Shared.Dto.Models.SystemParameters.SystemParameterTaxInformationCategory, ALF.Shared.Dto"

    taxCardEmail?: string;
    taxCardPhone?: string;

    constructor(data?: Partial<SystemParameterTaxInformationCategory>) {
        super(data);
        Object.assign(this, data);
        this.$type = SystemParameterTaxInformationCategory.typeNameHint;
    }
}
