
import { RetroPayDeltaProjectedStatus } from "./enums/retro-pay-delta-projected-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type RetroPayDeltaId = string;

export class RetroPayDelta {

    static $name = "RetroPayDelta";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPayDelta, ALF.Shared.Dto"

    id: RetroPayDeltaId;
    code: number;
    chainId: string;
    companyId?: string;
    periodNumber: number;
    employeeNumber: number;
    retroPaySnapshotId: string;
    retroPayTransactionId: string;
    retroPayRunEmployeeId?: number;
    projectedStatus: RetroPayDeltaProjectedStatus;
    periodId?: string;
    retroPaySnapId?: string;
    amount: number;
    payCode: number;
    retroPayId?: string;
    retroPayRunId: number;
    processedAt?: Date;
    processedPeriodId?: string;
    processedBy?: string;

    constructor(data?: Partial<RetroPayDelta>) {
        Object.assign(this, data);
    }
}
