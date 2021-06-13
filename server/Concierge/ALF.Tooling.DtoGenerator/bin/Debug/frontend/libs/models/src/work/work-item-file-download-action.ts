
import { FileFormat } from "../files/enums/file-format";
import { WorkItemAction } from "@alf/models/work/work-item-action";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkItemFileDownloadAction extends WorkItemAction {

    static $name = "WorkItemFileDownloadAction";
    static typeNameHint = "ALF.Shared.Dto.Models.Work.WorkItemFileDownloadAction, ALF.Shared.Dto"

    binaryItemId?: string;
    fileFormat: FileFormat;
    linkDescription?: string;

    constructor(data?: Partial<WorkItemFileDownloadAction>) {
        super(data);
        Object.assign(this, data);
        this.$type = WorkItemFileDownloadAction.typeNameHint;
    }
}
