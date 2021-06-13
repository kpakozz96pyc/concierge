
import { IncomeReportIncomeChangeReason } from "./enums/income-report-income-change-reason";
import { IncomeReportBenefitData } from "./income-report-benefit-data";
import { IncomeReportFringeBenefitChange } from "./income-report-fringe-benefit-change";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeReportEditableFields {

    static $name = "IncomeReportEditableFields";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.IncomeReports.IncomeReportEditableFields, ALF.Shared.Dto"

    hasCloseRelation?: boolean;
    senderName?: string;
    senderPhoneNumber?: string;
    income?: number;
    incomeChangeReason?: IncomeReportIncomeChangeReason;
    reimbursementAmountPerMonth?: number;
    reimbursementEndDate?: Date;
    fringeBenefitChanges: IncomeReportFringeBenefitChange[] = [];
    benefitData: IncomeReportBenefitData;

    constructor(data?: Partial<IncomeReportEditableFields>) {
        Object.assign(this, data);
    }
}
