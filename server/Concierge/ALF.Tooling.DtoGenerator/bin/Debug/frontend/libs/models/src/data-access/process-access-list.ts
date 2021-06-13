
import { ProcessId } from "./process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ProcessAccessListId = string;

export class ProcessAccessList {

    static $name = "ProcessAccessList";
    static typeNameHint = "ALF.Shared.Dto.Models.DataAccess.ProcessAccessList, ALF.Shared.Dto"

    id: ProcessAccessListId;
    accessEntityId?: string;
    processes: ProcessId[] = [];

    constructor(data?: Partial<ProcessAccessList>) {
        Object.assign(this, data);
    }
}
