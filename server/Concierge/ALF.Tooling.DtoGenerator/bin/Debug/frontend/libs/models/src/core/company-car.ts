
import { CompanyCarType } from "./enums/company-car-type";
import { CompanyCarStatusType } from "./enums/company-car-status-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type CompanyCarId = string;

export class CompanyCar {

    static $name = "CompanyCar";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.CompanyCar, ALF.Shared.Dto"

    id: CompanyCarId;
    companyId: string;
    registrationCode: string;
    carBrandName?: string;
    description?: string;
    registrationDate?: Date;
    yearOfCarModel?: number;
    price?: number;
    isElectric: boolean;
    carType: CompanyCarType;
    isPool: boolean;
    soldAtDate?: Date;
    insuranceDate?: Date;
    insuranceDistance?: number;
    insuranceYearlyDistance?: number;
    insuranceDeductible?: number;
    carOwner?: string;
    insuranceCompany?: string;
    carStatus: CompanyCarStatusType;

    constructor(data?: Partial<CompanyCar>) {
        Object.assign(this, data);
    }
}
