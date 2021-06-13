
import { SystemParameterCategory } from "@alf/models/system-parameters/system-parameter-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SystemParameterProcessTemplateSetCategoryId = string;

export class SystemParameterProcessTemplateSetCategory extends SystemParameterCategory {

    static $name = "SystemParameterProcessTemplateSetCategory";
    static typeNameHint = "ALF.Shared.Dto.Models.SystemParameters.SystemParameterProcessTemplateSetCategory, ALF.Shared.Dto"

    processTemplateSet?: string;

    constructor(data?: Partial<SystemParameterProcessTemplateSetCategory>) {
        super(data);
        Object.assign(this, data);
        this.$type = SystemParameterProcessTemplateSetCategory.typeNameHint;
    }
}
