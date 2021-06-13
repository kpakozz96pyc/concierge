
import { InternalEntity } from "../amelding/enums/internal-entity";
import { AmeldingErrorSeverity } from "../amelding/enums/amelding-error-severity";
import { WorkItemAction } from "@alf/models/work/work-item-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AmeldingErrorIgnoreExactAction extends WorkItemAction {

    static $name = "AmeldingErrorIgnoreExactAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.AmeldingErrorIgnoreExactAction, ALF.Shared.Dto"

    companyId: string;
    ameldingId: string;
    internalEntity: InternalEntity;
    ameldingErrorId: string;
    mostSevereSeverity: AmeldingErrorSeverity;

    constructor(data?: Partial<AmeldingErrorIgnoreExactAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = AmeldingErrorIgnoreExactAction.typeNameHint;
    }
}
