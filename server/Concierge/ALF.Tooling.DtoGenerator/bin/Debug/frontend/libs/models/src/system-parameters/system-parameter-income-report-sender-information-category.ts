
import { SystemParameterCategory } from "@alf/models/system-parameters/system-parameter-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SystemParameterIncomeReportSenderInformationCategoryId = string;

export class SystemParameterIncomeReportSenderInformationCategory extends SystemParameterCategory {

    static $name = "SystemParameterIncomeReportSenderInformationCategory";
    static typeNameHint = "ALF.Shared.Dto.Models.SystemParameters.SystemParameterIncomeReportSenderInformationCategory, ALF.Shared.Dto"

    senderName?: string;
    senderPhoneNumber?: string;

    constructor(data?: Partial<SystemParameterIncomeReportSenderInformationCategory>) {
        super(data);
        Object.assign(this, data);
        this.$type = SystemParameterIncomeReportSenderInformationCategory.typeNameHint;
    }
}
