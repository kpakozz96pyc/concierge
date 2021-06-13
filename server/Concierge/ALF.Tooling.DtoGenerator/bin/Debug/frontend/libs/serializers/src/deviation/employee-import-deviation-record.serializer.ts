import { Serializer } from "@alf/core/models";
import { EmployeeImportDeviationRecord } from "@alf/models/deviation/employee-import-deviation-record";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportDeviationRecordSerializer implements Serializer<EmployeeImportDeviationRecord> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeImportDeviationRecord
    deserialize(data: any): EmployeeImportDeviationRecord | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.approvedAt !== undefined)
            copy.approvedAt = new Date(copy.approvedAt);

        return new EmployeeImportDeviationRecord(copy);
    }

    serialize(entity: EmployeeImportDeviationRecord | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeImportDeviationRecord, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeImportDeviationRecord | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeImportDeviationRecord.typeNameHint : undefined,
            id: entity.id,
            employeeImportId: entity.employeeImportId,
            employeeImportAttemptId: entity.employeeImportAttemptId,
            chunkId: entity.chunkId,
            dataSkipped: entity.dataSkipped,
            deviationType: entity.deviationType,
            generalExternalEmployeeIdentifier: entity.generalExternalEmployeeIdentifier,
            generalExternalEmploymentIdentifier: entity.generalExternalEmploymentIdentifier,
            companyId: entity.companyId,
            employeeNumber: entity.employeeNumber,
            positionCode: entity.positionCode,
            employmentSequenceNumber: entity.employmentSequenceNumber,
            targetTableNumber: entity.targetTableNumber,
            targetFieldNumber: entity.targetFieldNumber,
            description: entity.description,
            details: entity.details,
            severity: entity.severity,
            sourceReference: entity.sourceReference,
            sourceValue: entity.sourceValue,
            status: entity.status,
            approvedBy: entity.approvedBy,
            approvedAt: entity.approvedAt
                ? entity.approvedAt.toISOString()
                : undefined
        };
    }
}
