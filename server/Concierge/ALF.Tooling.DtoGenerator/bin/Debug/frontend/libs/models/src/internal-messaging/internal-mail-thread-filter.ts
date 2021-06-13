
import { AssignmentFilter } from "./enums/assignment-filter";
import { InternalMailThreadStatus } from "./enums/internal-mail-thread-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type InternalMailThreadFilterId = string;

export class InternalMailThreadFilter {

    static $name = "InternalMailThreadFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.InternalMessaging.InternalMailThreadFilter, ALF.Shared.Dto"

    id: InternalMailThreadFilterId;
    statuses: InternalMailThreadStatus[] = [];
    searchString?: string;
    assignment: AssignmentFilter;

    constructor(data?: Partial<InternalMailThreadFilter>) {
        Object.assign(this, data);
    }
}
