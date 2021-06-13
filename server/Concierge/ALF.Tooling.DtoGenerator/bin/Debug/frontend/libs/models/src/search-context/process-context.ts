
import { ProcessName } from "../data-access/enums/process-name";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProcessContext {

    static $name = "ProcessContext";
    static typeNameHint = "ALF.Shared.Dto.Models.SearchContext.ProcessContext, ALF.Shared.Dto"

    processId: ProcessName;

    constructor(data?: Partial<ProcessContext>) {
        Object.assign(this, data);
    }
}
