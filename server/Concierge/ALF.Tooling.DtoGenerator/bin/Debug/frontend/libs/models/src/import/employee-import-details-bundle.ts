
import { EmployeeImportId } from "./employee-import";
import { ImportSourceId } from "./import-source";
import { EmployeeImportSummaryId } from "./employee-import-summary";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportDetailsBundle {

    static $name = "EmployeeImportDetailsBundle";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.EmployeeImportDetailsBundle, ALF.Shared.Dto"

    import?: EmployeeImportId;
    source?: ImportSourceId;
    summary?: EmployeeImportSummaryId;

    constructor(data?: Partial<EmployeeImportDetailsBundle>) {
        Object.assign(this, data);
    }
}
