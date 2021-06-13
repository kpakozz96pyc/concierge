
import { GDPRMainCategory } from "./enums/gdprmain-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type GDPRCategoryId = string;

export class GDPRCategory {

    static $name = "GDPRCategory";
    static typeNameHint = "ALF.Shared.Dto.Models.DatabaseMetadata.GDPRCategory, ALF.Shared.Dto"

    id: GDPRCategoryId;
    companyId?: string;
    mainCategory: GDPRMainCategory;
    subCategory?: string;
    subCategoryDescription?: string;
    archiveMonths: number;
    overrideSubCategoryDescription?: string;
    overrideArchiveMonths?: number;

    constructor(data?: Partial<GDPRCategory>) {
        Object.assign(this, data);
    }
}
