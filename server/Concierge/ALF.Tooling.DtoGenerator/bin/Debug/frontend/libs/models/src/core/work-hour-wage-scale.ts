

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WorkHourWageScaleId = string;

export class WorkHourWageScale {

    static $name = "WorkHourWageScale";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.WorkHourWageScale, ALF.Shared.Dto"

    id: WorkHourWageScaleId;
    companyId: string;
    groupNumber: number;
    yearlyWorkHours: number;
    yearlyWeeks: number;
    weeklyWorkHours: number;

    constructor(data?: Partial<WorkHourWageScale>) {
        Object.assign(this, data);
    }
}
