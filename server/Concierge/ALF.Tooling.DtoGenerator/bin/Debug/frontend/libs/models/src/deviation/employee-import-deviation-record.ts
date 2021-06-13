
import { DeviationType } from "./enums/deviation-type";
import { DeviationSeverity } from "./enums/deviation-severity";
import { DeviationStatus } from "./enums/deviation-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportDeviationRecord {

    static $name = "EmployeeImportDeviationRecord";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.Deviation.EmployeeImportDeviationRecord, ALF.Shared.Dto"

    id: string;
    employeeImportId: string;
    employeeImportAttemptId: string;
    chunkId?: string;
    dataSkipped: boolean;
    deviationType: DeviationType;
    generalExternalEmployeeIdentifier?: any;
    generalExternalEmploymentIdentifier?: any;
    companyId?: string;
    employeeNumber?: number;
    positionCode?: string;
    employmentSequenceNumber?: number;
    targetTableNumber: number;
    targetFieldNumber: number;
    description?: string;
    details?: string;
    severity: DeviationSeverity;
    sourceReference?: string;
    sourceValue?: any;
    status: DeviationStatus;
    approvedBy?: string;
    approvedAt?: Date;

    constructor(data?: Partial<EmployeeImportDeviationRecord>) {
        Object.assign(this, data);
    }
}
