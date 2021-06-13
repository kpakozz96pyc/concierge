
import { ProcessCycleTimeUnit } from "../process/enums/process-cycle-time-unit";
import { CreationCondition } from "./enums/creation-condition";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TimeBasedProcessPlanInput {

    static $name = "TimeBasedProcessPlanInput";
    static typeNameHint = "ALF.Shared.Dto.Models.Process.Template.TimeBasedProcessPlanInput, ALF.Shared.Dto"

    $type: string;
    timeUnit: ProcessCycleTimeUnit;
    timeFilter: number[] = [];
    earliestPossibleCreationFormula?: string;
    latestPossibleCreationFormula?: string;
    startFormula?: string;
    intervalStartFormula?: string;
    intervalEndFormula?: string;
    creationCondition?: CreationCondition;

    constructor(data?: Partial<TimeBasedProcessPlanInput>) {
        Object.assign(this, data);
    }
}
