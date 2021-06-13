
import { ErrorType } from "../amelding/enums/error-type";
import { CompanyId } from "../core/company";
import { WorkItemNavigationAction } from "@alf/models/work/work-item-navigation-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemAmeldingErrorSummaryNavigationAction extends WorkItemNavigationAction {

    static $name = "WorkItemAmeldingErrorSummaryNavigationAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemAmeldingErrorSummaryNavigationAction, ALF.Shared.Dto"

    companyId: CompanyId;
    ameldingId?: string;
    errorType: ErrorType;

    constructor(data?: Partial<WorkItemAmeldingErrorSummaryNavigationAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemAmeldingErrorSummaryNavigationAction.typeNameHint;
    }
}
