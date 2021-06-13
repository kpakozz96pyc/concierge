
import { GDPRMainCategory } from "../database-metadata/enums/gdprmain-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GDPRSystemCategoryExtendedInformation {

    static $name = "GDPRSystemCategoryExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.GDPRSystemCategoryExtendedInformation, ALF.Shared.Dto"

    mainCategory: GDPRMainCategory;

    constructor(data?: Partial<GDPRSystemCategoryExtendedInformation>) {
        Object.assign(this, data);
    }
}
