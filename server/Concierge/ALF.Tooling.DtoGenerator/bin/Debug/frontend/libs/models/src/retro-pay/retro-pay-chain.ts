
import { RetroPayDeltaId } from "./retro-pay-delta";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type RetroPayChainId = string;

export class RetroPayChain {

    static $name = "RetroPayChain";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPayChain, ALF.Shared.Dto"

    id: RetroPayChainId;
    retroPayGroupingId?: string;
    transactionFromDate?: Date;
    transactionToDate?: Date;
    originalAmount: number;
    previousAmount: number;
    previousDifference: number;
    newDifference: number;
    newAmount: number;
    transactionId?: string;
    companyId?: string;
    periodNumber: number;
    periodId?: string;
    employeeNumber: number;
    payCode: number;
    payCodeId?: string;
    transactionSequenceNumber: number;
    headRetroPayDelta: number;
    deltas: RetroPayDeltaId[] = [];

    constructor(data?: Partial<RetroPayChain>) {
        Object.assign(this, data);
    }
}
