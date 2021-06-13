import { Serializer } from "@alf/core/models";
import { EmploymentContext } from "@alf/models/search-context/employment-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmploymentContextSerializer implements Serializer<EmploymentContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmploymentContext
    deserialize(data: any): EmploymentContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmploymentContext(copy);
    }

    serialize(entity: EmploymentContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmploymentContext, _forceTypeHint?: boolean): any
    serialize(entity: EmploymentContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmploymentContext.typeNameHint : undefined,
            employeeId: entity.employeeId
        };
    }
}
