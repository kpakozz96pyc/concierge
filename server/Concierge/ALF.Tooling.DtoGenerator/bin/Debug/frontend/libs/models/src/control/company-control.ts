
import { CompanyControlParameter } from "./company-control-parameter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type CompanyControlId = string;

export class CompanyControl {

    static $name = "CompanyControl";
    static typeNameHint = "ALF.Shared.Dto.Models.Control.CompanyControl, ALF.Shared.Dto"

    id: CompanyControlId;
    companyId: string;
    controlDefinitionId?: string;
    overriddenValues: CompanyControlParameter[] = [];
    active: boolean;

    constructor(data?: Partial<CompanyControl>) {
        Object.assign(this, data);
    }
}
