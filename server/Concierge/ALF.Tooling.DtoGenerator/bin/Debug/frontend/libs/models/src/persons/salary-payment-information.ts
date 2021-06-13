

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type SalaryPaymentInformationId = string;

export class SalaryPaymentInformation {

    static $name = "SalaryPaymentInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.Persons.SalaryPaymentInformation, ALF.Shared.Dto"

    id: SalaryPaymentInformationId;
    employeeId: string;
    periodId: string;
    netAmount?: number;
    paySlipId?: string;
    payDate?: Date;

    constructor(data?: Partial<SalaryPaymentInformation>) {
        Object.assign(this, data);
    }
}
