import { Serializer } from "@alf/core/models";
import { EmploymentLevelError } from "@alf/models/errors/employment-level-error";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmploymentLevelErrorSerializer implements Serializer<EmploymentLevelError> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmploymentLevelError
    deserialize(data: any): EmploymentLevelError | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmploymentLevelError(copy);
    }

    serialize(entity: EmploymentLevelError | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmploymentLevelError, _forceTypeHint?: boolean): any
    serialize(entity: EmploymentLevelError | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            employmentId: entity.employmentId,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            id: entity.id,
            ameldingId: entity.ameldingId,
            errorId: entity.errorId,
            title: entity.title,
            message: entity.message,
            isIgnored: entity.isIgnored,
            severity: entity.severity,
            altinnEntity: entity.altinnEntity,
            internalEntity: entity.internalEntity
        };
    }
}
