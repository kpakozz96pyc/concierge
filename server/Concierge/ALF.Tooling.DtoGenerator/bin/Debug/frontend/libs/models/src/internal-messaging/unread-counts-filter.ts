
import { UnreadCountFilter } from "./unread-count-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type UnreadCountsFilterId = string;

export class UnreadCountsFilter {

    static $name = "UnreadCountsFilter";
    static typeNameHint = "ALF.Shared.Dto.Models.InternalMessaging.UnreadCountsFilter, ALF.Shared.Dto"

    id: UnreadCountsFilterId;
    counts: UnreadCountFilter[] = [];

    constructor(data?: Partial<UnreadCountsFilter>) {
        Object.assign(this, data);
    }
}
