
import { EmployeeId } from "../core/employee";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type EmployeeElectronicCommunicationId = string;

export class EmployeeElectronicCommunication {

    static $name = "EmployeeElectronicCommunication";
    static typeNameHint = "ALF.Shared.Dto.Models.Persons.EmployeeElectronicCommunication, ALF.Shared.Dto"

    id: EmployeeElectronicCommunicationId;
    companyId: string;
    schemeCode: string;
    employeeId: EmployeeId;
    electronicCommunicationId: string;
    isActive: boolean;
    startDate?: Date;
    endDate?: Date;

    constructor(data?: Partial<EmployeeElectronicCommunication>) {
        Object.assign(this, data);
    }
}
