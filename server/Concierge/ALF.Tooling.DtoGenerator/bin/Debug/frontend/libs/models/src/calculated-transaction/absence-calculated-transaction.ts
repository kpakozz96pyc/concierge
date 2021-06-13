

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AbsenceCalculatedTransactionId = string;

export class AbsenceCalculatedTransaction {

    static $name = "AbsenceCalculatedTransaction";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.CalculatedTransaction.AbsenceCalculatedTransaction, ALF.Shared.Dto"

    id: AbsenceCalculatedTransactionId;
    companyId?: string;
    employeeId?: string;
    employmentId?: string;
    from: Date;
    to: Date;
    absenceGradePercent: number;
    absenceCodeId?: any;
    absenceCaseId?: any;
    sickNoteId?: any;
    sicknessBenefitApplicationId?: any;
    absenceInputTransactionId?: any;
    incomeReportId?: any;
    isInEmployerPeriod?: boolean;
    shouldPaySalary?: boolean;

    constructor(data?: Partial<AbsenceCalculatedTransaction>) {
        Object.assign(this, data);
    }
}
