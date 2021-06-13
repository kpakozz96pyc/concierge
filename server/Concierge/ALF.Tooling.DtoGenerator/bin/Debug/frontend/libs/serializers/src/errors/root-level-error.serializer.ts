import { EmployeeLevelErrorSerializer } from "./employee-level-error.serializer";
import { EmploymentLevelErrorSerializer } from "./employment-level-error.serializer";
import { EmployeeLevelError } from "@alf/models/errors/employee-level-error";
import { EmploymentLevelError } from "@alf/models/errors/employment-level-error";
import { Serializer } from "@alf/core/models";
import { RootLevelError } from "@alf/models/errors/root-level-error";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RootLevelErrorSerializer implements Serializer<RootLevelError> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RootLevelError
    deserialize(data: any): RootLevelError | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Amelding.Errors.EmployeeLevelError, ALF.Shared.Dto")
            return new EmployeeLevelErrorSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Amelding.Errors.EmploymentLevelError, ALF.Shared.Dto")
            return new EmploymentLevelErrorSerializer().deserialize(data);

        const copy = { ...data };

        return new RootLevelError(copy);
    }

    serialize(entity: RootLevelError | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RootLevelError, _forceTypeHint?: boolean): any
    serialize(entity: RootLevelError | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Amelding.Errors.EmployeeLevelError, ALF.Shared.Dto")
            return new EmployeeLevelErrorSerializer().serialize(entity as EmployeeLevelError, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Amelding.Errors.EmploymentLevelError, ALF.Shared.Dto")
            return new EmploymentLevelErrorSerializer().serialize(entity as EmploymentLevelError, _forceTypeHint);

        return {
            $type: _forceTypeHint ? RootLevelError.typeNameHint : undefined,
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
