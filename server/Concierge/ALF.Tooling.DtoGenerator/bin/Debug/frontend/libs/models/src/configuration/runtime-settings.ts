
import { PaySalaryOutsideEmployersPeriod } from "../absence/enums/pay-salary-outside-employers-period";
import { WorkingTimeCalculationRule } from "../maintenance/enums/working-time-calculation-rule";
import { ApprovalTransactionFlow } from "../maintenance/enums/approval-transaction-flow";
import { CompanyId } from "../core/company";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RuntimeSettings {

    static $name = "RuntimeSettings";
    static typeNameHint = "ALF.Shared.Dto.Models.Configuration.RuntimeSettings, ALF.Shared.Dto"

    companyId: CompanyId;
    paySalaryOutsideEmployersPeriod?: PaySalaryOutsideEmployersPeriod;
    useAbsenceCodeCopyType?: boolean;
    workingTimeCalculationRule?: WorkingTimeCalculationRule;
    useAnsattProsent?: boolean;
    reportPension?: boolean;
    deductionCutoff?: number;
    prepayPeriodPayCode?: number;
    useVacationDayCollectionStartDate?: boolean;
    overrideVacationPayRate?: boolean;
    useAlternativeMunicipality?: boolean;
    shouldGenerateEmployeeNumber?: boolean;
    approvalTransactionFlow?: ApprovalTransactionFlow;

    constructor(data?: Partial<RuntimeSettings>) {
        Object.assign(this, data);
    }
}
