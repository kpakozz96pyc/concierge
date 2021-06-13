
import { PayrollPeriodId } from "../periods/payroll-period";
import { AggregatedControlResult } from "./aggregated-control-result";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ControlResultsId = string;

export class ControlResults {

    static $name = "ControlResults";
    static typeNameHint = "ALF.Shared.Dto.Models.Control.Result.ControlResults, ALF.Shared.Dto"

    id: ControlResultsId;
    periodId: PayrollPeriodId;
    calculatedAt?: Date;
    results: AggregatedControlResult[] = [];

    constructor(data?: Partial<ControlResults>) {
        Object.assign(this, data);
    }
}
