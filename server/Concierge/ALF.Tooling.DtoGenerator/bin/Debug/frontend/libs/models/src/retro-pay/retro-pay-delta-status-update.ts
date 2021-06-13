
import { RetroPayDeltaProjectedStatus } from "./enums/retro-pay-delta-projected-status";
import { RetroPayDeltaSelectedTreatment } from "./enums/retro-pay-delta-selected-treatment";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RetroPayDeltaStatusUpdate {

    static $name = "RetroPayDeltaStatusUpdate";
    static typeNameHint = "ALF.Shared.Dto.Models.RetroPay.RetroPayDeltaStatusUpdate, ALF.Shared.Dto"

    ids?: any;
    companyId?: string;
    allSelected: boolean;
    contextStatus?: RetroPayDeltaProjectedStatus;
    filter?: string;
    toSetTreatment?: RetroPayDeltaSelectedTreatment;

    constructor(data?: Partial<RetroPayDeltaStatusUpdate>) {
        Object.assign(this, data);
    }
}
