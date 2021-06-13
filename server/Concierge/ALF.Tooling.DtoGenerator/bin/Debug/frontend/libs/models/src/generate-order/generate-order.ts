
import { AmeldingMonthlySubmissionBaseId } from "../amelding/amelding-monthly-submission-base";
import { PayrollPeriodListItemId } from "../periods/payroll-period-list-item";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GenerateOrder {

    static $name = "GenerateOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.GenerateOrder.GenerateOrder, ALF.Shared.Dto"

    ameldingMonthlySubmissionId: AmeldingMonthlySubmissionBaseId;
    replacingAmeldingId?: string;
    isDraft: boolean;
    isBlank: boolean;
    includePaymentInfo: boolean;
    periodIds: PayrollPeriodListItemId[] = [];

    constructor(data?: Partial<GenerateOrder>) {
        Object.assign(this, data);
    }
}
