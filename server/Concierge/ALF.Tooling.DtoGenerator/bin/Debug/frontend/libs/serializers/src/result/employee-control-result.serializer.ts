import { Serializer } from "@alf/core/models";
import { EmployeeControlResult } from "@alf/models/result/employee-control-result";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeControlResultSerializer implements Serializer<EmployeeControlResult> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeControlResult
    deserialize(data: any): EmployeeControlResult | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.approvedAt !== undefined)
            copy.approvedAt = new Date(copy.approvedAt);

        return new EmployeeControlResult(copy);
    }

    serialize(entity: EmployeeControlResult | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeControlResult, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeControlResult | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeControlResult.typeNameHint : undefined,
            displayMessage: entity.displayMessage,
            severity: entity.severity,
            count: entity.count,
            isApproved: entity.isApproved,
            approvedAt: entity.approvedAt
                ? entity.approvedAt.toISOString()
                : undefined,
            approvedByUserId: entity.approvedByUserId,
            controlType: entity.controlType,
            controlDefinitionId: entity.controlDefinitionId,
            controlDefinitionVersion: entity.controlDefinitionVersion,
            controlCompanyVersion: entity.controlCompanyVersion,
            controlResultId: entity.controlResultId,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            employeeNumber: entity.employeeNumber,
            controlResultIdentifier: entity.controlResultIdentifier
        };
    }
}
