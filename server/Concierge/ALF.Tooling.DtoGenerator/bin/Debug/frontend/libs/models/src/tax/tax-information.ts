
import { EmployeeId } from "../core/employee";
import { TaxInformationPart } from "./tax-information-part";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TaxInformationId = string;

export class TaxInformation {

    static $name = "TaxInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.Tax.TaxInformation, ALF.Shared.Dto"

    id: TaxInformationId;
    companyId: string;
    employeeId: EmployeeId;
    taxYear: number;
    validFrom: Date;
    taxId?: number;
    created: Date;
    createdBy?: string;
    modified?: Date;
    modifiedBy?: string;
    isActive: boolean;
    parts: TaxInformationPart[] = [];
    svalbard: boolean;
    actionZone: boolean;
    noTaxCard: boolean;
    noDeduction: boolean;
    norwegianExpatPensionerTax: boolean;
    norwegianExpatSalaryTax: boolean;
    isEditable?: boolean;

    constructor(data?: Partial<TaxInformation>) {
        Object.assign(this, data);
    }
}
