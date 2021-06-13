

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type RegulativeStepId = string;

export class RegulativeStep {

    static $name = "RegulativeStep";
    static typeNameHint = "ALF.Shared.Dto.Models.Wage.RegulativeStep, ALF.Shared.Dto"

    id: RegulativeStepId;
    companyId: string;
    regulativeCode: string;
    salaryStep: number;
    fromDate: Date;
    monthlyRate: number;
    fourWeeksRate: number;
    twoWeeksRate: number;
    weeklyRate: number;
    description?: string;
    yearlyRate: number;
    dailyRate: number;
    hourlyRate: number;
    overtimeRate: number;
    rate5: number;
    rate6: number;
    rate7: number;
    rate8: number;
    rate9: number;
    rate10: number;
    rate11: number;
    rate12: number;
    rate13: number;
    rate14: number;
    rate15: number;
    rate16: number;
    rate17: number;
    rate18: number;
    rate19: number;

    constructor(data?: Partial<RegulativeStep>) {
        Object.assign(this, data);
    }
}
