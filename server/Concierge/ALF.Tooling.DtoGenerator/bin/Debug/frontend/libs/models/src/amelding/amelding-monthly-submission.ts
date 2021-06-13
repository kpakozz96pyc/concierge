
import { PayrollPeriodListItemId } from "../periods/payroll-period-list-item";
import { AmeldingMonthlySubmissionBase } from "@alf/models/amelding/amelding-monthly-submission-base";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AmeldingMonthlySubmissionId = string;

export class AmeldingMonthlySubmission extends AmeldingMonthlySubmissionBase {

    static $name = "AmeldingMonthlySubmission";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AmeldingMonthlySubmission, ALF.Shared.Dto"

    unreportedPeriods: PayrollPeriodListItemId[] = [];

    constructor(data?: Partial<AmeldingMonthlySubmission>) {
        super(data);
        Object.assign(this, data);
        this.$type = AmeldingMonthlySubmission.typeNameHint;
    }
}
