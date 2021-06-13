
import { WorkItemAction } from "@alf/models/work/work-item-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInfoImportDeviationApprovalAction extends WorkItemAction {

    static $name = "TaxInfoImportDeviationApprovalAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.TaxInfoImportDeviationApprovalAction, ALF.Shared.Dto"

    taxInformationImportDeviationId: string;

    constructor(data?: Partial<TaxInfoImportDeviationApprovalAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = TaxInfoImportDeviationApprovalAction.typeNameHint;
    }
}
