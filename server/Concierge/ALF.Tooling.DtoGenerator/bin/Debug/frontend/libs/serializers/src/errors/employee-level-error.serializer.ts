import { EmploymentLevelErrorSerializer } from "./employment-level-error.serializer";
import { EmploymentLevelError } from "@alf/models/errors/employment-level-error";
import { Serializer } from "@alf/core/models";
import { EmployeeLevelError } from "@alf/models/errors/employee-level-error";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeLevelErrorSerializer implements Serializer<EmployeeLevelError> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeLevelError
    deserialize(data: any): EmployeeLevelError | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Amelding.Errors.EmploymentLevelError, ALF.Shared.Dto")
            return new EmploymentLevelErrorSerializer().deserialize(data);

        const copy = { ...data };

        return new EmployeeLevelError(copy);
    }

    serialize(entity: EmployeeLevelError | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeLevelError, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeLevelError | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Amelding.Errors.EmploymentLevelError, ALF.Shared.Dto")
            return new EmploymentLevelErrorSerializer().serialize(entity as EmploymentLevelError, _forceTypeHint);

        return {
            $type: entity.$type,
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
