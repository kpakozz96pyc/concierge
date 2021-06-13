
import { ControlResultSeverity } from "./enums/control-result-severity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AggregatedControlResult {

    static $name = "AggregatedControlResult";
    static typeNameHint = "ALF.Shared.Dto.Models.Control.Result.AggregatedControlResult, ALF.Shared.Dto"

    controlDefinitionId?: string;
    severity: ControlResultSeverity;
    rowCount: number;

    constructor(data?: Partial<AggregatedControlResult>) {
        Object.assign(this, data);
    }
}
