

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ActionCodeId = string;

export class ActionCode {

    static $name = "ActionCode";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.ActionCode, ALF.Shared.Dto"

    id: ActionCodeId;
    companyId?: string;
    code: number;
    description: string;
    terminationCode?: number;
    logTableNumber?: number;
    logFieldNumber?: number;
    free01?: string;
    withdrawalCode?: number;
    withdrawalAddressCode?: number;
    actionTableNumber?: number;
    actionFieldNumber?: number;
    free02?: string;
    deletingStatus?: number;

    constructor(data?: Partial<ActionCode>) {
        Object.assign(this, data);
    }
}
