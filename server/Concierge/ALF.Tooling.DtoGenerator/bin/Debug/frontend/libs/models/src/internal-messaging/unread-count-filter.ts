
import { AssignmentFilter } from "./enums/assignment-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UnreadCountFilter {

    static $name = "UnreadCountFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.InternalMessaging.UnreadCountFilter, ALF.Shared.Dto"

    id: AssignmentFilter;
    count: number;

    constructor(data?: Partial<UnreadCountFilter>) {
        Object.assign(this, data);
    }
}
