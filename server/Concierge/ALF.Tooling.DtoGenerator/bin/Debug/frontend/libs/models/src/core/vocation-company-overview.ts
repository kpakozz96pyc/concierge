
import { CompanyId } from "./company";
import { VocationCode } from "./vocation-code";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class VocationCompanyOverview {

    static $name = "VocationCompanyOverview";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.VocationCompanyOverview, ALF.Shared.Dto"

    companyId: CompanyId;
    selectedVocations: VocationCode[] = [];

    constructor(data?: Partial<VocationCompanyOverview>) {
        Object.assign(this, data);
    }
}
