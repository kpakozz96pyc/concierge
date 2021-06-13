import { EmployeeControlResultSerializer } from "./employee-control-result.serializer";
import { Serializer } from "@alf/core/models";
import { EmployeeControlResults } from "@alf/models/result/employee-control-results";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeControlResultsSerializer implements Serializer<EmployeeControlResults> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeControlResults
    deserialize(data: any): EmployeeControlResults | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.details = (copy.details || []).map(new EmployeeControlResultSerializer().deserialize);

        return new EmployeeControlResults(copy);
    }

    serialize(entity: EmployeeControlResults | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeControlResults, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeControlResults | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeControlResults.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            employeeNumber: entity.employeeNumber,
            periodId: entity.periodId,
            periodNumber: entity.periodNumber,
            details: entity.details
                ? entity.details.map(e => new EmployeeControlResultSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
