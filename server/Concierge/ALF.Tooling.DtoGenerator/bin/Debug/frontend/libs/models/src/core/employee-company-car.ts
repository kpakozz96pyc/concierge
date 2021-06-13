
import { EmployeeId } from "./employee";
import { CompanyCarId } from "./company-car";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeCompanyCarId = string;

export class EmployeeCompanyCar {

    static $name = "EmployeeCompanyCar";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.EmployeeCompanyCar, ALF.Shared.Dto"

    id: EmployeeCompanyCarId;
    companyId: string;
    employeeId: EmployeeId;
    companyCarId: CompanyCarId;
    isActive: boolean;
    isServiceDrivingAboveLimit: boolean;
    isMismatchAgainstListPrice: boolean;
    distanceBetweenHomeAndWork: number;
    startDate?: Date;
    endDate?: Date;

    constructor(data?: Partial<EmployeeCompanyCar>) {
        Object.assign(this, data);
    }
}
