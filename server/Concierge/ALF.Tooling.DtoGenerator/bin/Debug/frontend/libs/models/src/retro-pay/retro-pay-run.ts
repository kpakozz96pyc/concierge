
import { RetroPayRunType } from "./enums/retro-pay-run-type";
import { RetroPayRunStatus } from "./enums/retro-pay-run-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type RetroPayRunId = string;

export class RetroPayRun {

    static $name = "RetroPayRun";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPayRun, ALF.Shared.Dto"

    id: RetroPayRunId;
    code: number;
    companyId?: string;
    calculationRunId: string;
    waitingForJobId?: string;
    retroPayRunType: RetroPayRunType;
    retroPayRunStatus: RetroPayRunStatus;
    retroPayRunContext: number;
    retroPayRunStartContext: Date;
    fromPeriod: number;
    toPeriod: number;
    employeeSelection: boolean;
    orderedByUsername?: string;
    orderedByuserId?: string;
    orderedAt: Date;
    runStartedAt: Date;
    runCompletedAt?: Date;
    message?: string;

    constructor(data?: Partial<RetroPayRun>) {
        Object.assign(this, data);
    }
}
