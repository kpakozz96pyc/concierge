

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WageGroupId = string;

export class WageGroup {

    static $name = "WageGroup";
    static typeNameHint = "ALF.Shared.Dto.Models.WageGroups.WageGroup, ALF.Shared.Dto"

    id: WageGroupId;
    companyId: string;
    code: string;
    description?: string;
    parentWageGroup?: string;

    constructor(data?: Partial<WageGroup>) {
        Object.assign(this, data);
    }
}
