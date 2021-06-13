
import { PayslipReportInformation } from "./payslip-report-information";
import { AccumulatedValue } from "../details/accumulated-value";
import { BankPayment } from "../details/bank-payment";
import { PaySlipLine } from "../details/pay-slip-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayslipDetails {

    static $name = "PayslipDetails";
    static typeNameHint = "ALF.Shared.Dto.Models.Payslip.PayslipDetails, ALF.Shared.Dto"

    id: string;
    employeeId: string;
    periodId: string;
    reportInformation: PayslipReportInformation;
    accumulatedValues: AccumulatedValue[] = [];
    bankPayments: BankPayment[] = [];
    paymentLines: PaySlipLine[] = [];
    texts: string[] = [];

    constructor(data?: Partial<PayslipDetails>) {
        Object.assign(this, data);
    }
}
