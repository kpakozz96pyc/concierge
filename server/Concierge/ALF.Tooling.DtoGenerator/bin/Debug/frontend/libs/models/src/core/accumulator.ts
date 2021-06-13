
import { EmployeeId } from "./employee";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AccumulatorId = string;

export class Accumulator {

    static $name = "Accumulator";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.Accumulator, ALF.Shared.Dto"

    id: AccumulatorId;
    companyId: string;
    employeeNumber: number;
    periodNumber: number;
    employeeId: EmployeeId;
    periodId: string;
    vacationPayReceivable?: number;
    vacationPayReceivableAdditionalWeek?: number;
    vacationDaysReceivableExtr?: number;
    vacationPayBasis1?: number;
    vacationPayBasis2?: number;
    vacationPayBasis3?: number;
    vacationPayBasisAdditionalWeek?: number;
    vacationProvisionBasis1?: number;
    vacationProvisionBasis2?: number;
    vacationProvisionBasis3?: number;
    vacationProvisionBasisAdditionalWeek?: number;
    vacationDaysLastYear?: number;
    vacationDaysCurrentYear?: number;
    vacationDaysNextYear?: number;
    vacationDaysAccumulatedCurrentYear?: number;
    advanceSalary?: number;
    rounding?: number;
    negativeNetSalary?: number;
    grossSalary?: number;
    netSalaryPeriod?: number;
    taxDeduction?: number;
    forcedSalaryDeduction?: number;
    companyCarKilometers?: number;
    specialCompanyCarKilometers?: number;
    unionDeduction?: number;
    electronicCommunication?: number;
    usedTaxFreeAmount?: number;
    taxFreeAmount?: number;
    workHours?: number;
    accordHours?: number;
    overtimeHours?: number;
    userDefined1?: number;
    userDefined2?: number;
    userDefined3?: number;
    userDefined4?: number;
    userDefined5?: number;
    userDefined6?: number;
    userDefined7?: number;
    userDefined8?: number;
    userDefined9?: number;
    userDefined10?: number;
    userDefined11?: number;
    userDefined12?: number;
    userDefined13?: number;
    userDefined14?: number;
    userDefined15?: number;
    userDefined16?: number;
    userDefined17?: number;
    userDefined18?: number;
    userDefined19?: number;
    userDefined20?: number;
    userDefined21?: number;
    userDefined22?: number;
    userDefined23?: number;
    userDefined24?: number;
    userDefined25?: number;
    userDefined26?: number;
    userDefined27?: number;
    userDefined28?: number;
    userDefined29?: number;
    userDefined30?: number;

    constructor(data?: Partial<Accumulator>) {
        Object.assign(this, data);
    }
}
