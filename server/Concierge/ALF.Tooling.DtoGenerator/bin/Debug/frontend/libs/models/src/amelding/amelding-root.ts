
import { AmeldingStatus } from "./enums/amelding-status";
import { PayrollPeriodListItemId } from "../periods/payroll-period-list-item";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AmeldingRootId = string;

export class AmeldingRoot {

    static $name = "AmeldingRoot";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AmeldingRoot, ALF.Shared.Dto"

    id: AmeldingRootId;
    encodedId?: string;
    companyId?: string;
    year: number;
    month: number;
    replacingAmeldingId?: string;
    status: AmeldingStatus;
    waitingForJobId?: string;
    hasPendingJob: boolean;
    generatedBy?: string;
    generatedAt?: Date;
    sentAt?: Date;
    receivedFeedbackAt?: Date;
    isDraft: boolean;
    isBlank: boolean;
    containsPaymentInfo: boolean;
    canBeErased: boolean;
    whyCantItBeErased?: string;
    canBeReplaced: boolean;
    whyCantItBeReplaced?: string;
    reportingForPayrollPeriods: PayrollPeriodListItemId[] = [];
    orderedAt?: Date;

    constructor(data?: Partial<AmeldingRoot>) {
        Object.assign(this, data);
    }
}
