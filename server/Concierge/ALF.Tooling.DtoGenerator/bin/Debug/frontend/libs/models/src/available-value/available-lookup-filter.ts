
import { ProcessName } from "../data-access/enums/process-name";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AvailableLookupFilter {

    static $name = "AvailableLookupFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.AvailableLookupFilter, ALF.Shared.Dto"

    lookupId: string;
    processName: ProcessName;
    allowedIds: string[] = [];

    constructor(data?: Partial<AvailableLookupFilter>) {
        Object.assign(this, data);
    }
}
