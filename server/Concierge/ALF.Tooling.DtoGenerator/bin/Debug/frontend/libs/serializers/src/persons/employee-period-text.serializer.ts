import { Serializer } from "@alf/core/models";
import { EmployeePeriodText } from "@alf/models/persons/employee-period-text";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeePeriodTextSerializer implements Serializer<EmployeePeriodText> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeePeriodText
    deserialize(data: any): EmployeePeriodText | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeePeriodText(copy);
    }

    serialize(entity: EmployeePeriodText | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeePeriodText, _forceTypeHint?: boolean): any
    serialize(entity: EmployeePeriodText | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeePeriodText.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            employeeNumber: entity.employeeNumber,
            text: entity.text
        };
    }
}
