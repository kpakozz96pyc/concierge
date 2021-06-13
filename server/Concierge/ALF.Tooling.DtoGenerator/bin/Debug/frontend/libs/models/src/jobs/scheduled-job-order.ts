﻿
import { ScheduledJobScheduleModel } from "./scheduled-job-schedule-model";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ScheduledJobOrderId = string;

export class ScheduledJobOrder {

    static $name = "ScheduledJobOrder";
    static typeNameHint = "ALF.Shared.Dto.Models.Jobs.ScheduledJobOrder, ALF.Shared.Dto"

    id: ScheduledJobOrderId;
    jobType?: string;
    nextRunTimeUtc?: Date;
    lastRunsTimeUtc: Date[] = [];
    isSystemShipped: boolean;
    isAutogenerated: boolean;
    model?: ScheduledJobScheduleModel;
    parameters: { [key: string]: string } = {};
    schedule?: string;
    runOnceAt?: Date;
    active: boolean;

    constructor(data?: Partial<ScheduledJobOrder>) {
        Object.assign(this, data);
    }
}
