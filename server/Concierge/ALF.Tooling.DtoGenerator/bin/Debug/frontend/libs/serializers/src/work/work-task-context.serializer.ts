import { Serializer } from "@alf/core/models";
import { WorkTaskContext } from "@alf/models/work/work-task-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WorkTaskContextSerializer implements Serializer<WorkTaskContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WorkTaskContext
    deserialize(data: any): WorkTaskContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new WorkTaskContext(copy);
    }

    serialize(entity: WorkTaskContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WorkTaskContext, _forceTypeHint?: boolean): any
    serialize(entity: WorkTaskContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WorkTaskContext.typeNameHint : undefined,
            type: entity.type,
            encodedId: entity.encodedId,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            periodId: entity.periodId,
            year: entity.year,
            month: entity.month
        };
    }
}
