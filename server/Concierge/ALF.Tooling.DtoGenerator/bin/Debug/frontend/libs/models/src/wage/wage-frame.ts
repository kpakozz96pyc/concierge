
import { CompanyId } from "../core/company";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type WageFrameId = string;

export class WageFrame {

    static $name = "WageFrame";
    static typeNameHint = "ALF.Shared.Dto.Models.Wage.WageFrame, ALF.Shared.Dto"

    id: WageFrameId;
    companyId: CompanyId;
    wageFrameCode: string;
    description?: string;

    constructor(data?: Partial<WageFrame>) {
        Object.assign(this, data);
    }
}
