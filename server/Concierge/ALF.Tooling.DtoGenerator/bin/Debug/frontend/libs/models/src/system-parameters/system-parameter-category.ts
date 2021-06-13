

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SystemParameterCategoryId = string;

export class SystemParameterCategory {

    static $name = "SystemParameterCategory";
    static typeNameHint = "ALF.Shared.Dto.Models.SystemParameters.SystemParameterCategory, ALF.Shared.Dto"

    $type: string;
    id: SystemParameterCategoryId;
    code: string;
    description: string;

    constructor(data?: Partial<SystemParameterCategory>) {
        Object.assign(this, data);
    }
}
