import { Serializer } from "@alf/core/models";
import { AbsenceCaseEmploymentGroup } from "@alf/models/absence-cases/absence-case-employment-group";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCaseEmploymentGroupSerializer implements Serializer<AbsenceCaseEmploymentGroup> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCaseEmploymentGroup
    deserialize(data: any): AbsenceCaseEmploymentGroup | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AbsenceCaseEmploymentGroup(copy);
    }

    serialize(entity: AbsenceCaseEmploymentGroup | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCaseEmploymentGroup, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCaseEmploymentGroup | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceCaseEmploymentGroup.typeNameHint : undefined,
            id: entity.id,
            calculatedMonthlyIncome: entity.calculatedMonthlyIncome,
            overriddenMonthlyIncome: entity.overriddenMonthlyIncome,
            calculatedMonthlyReimbursement: entity.calculatedMonthlyReimbursement,
            overriddenMonthlyReimbursement: entity.overriddenMonthlyReimbursement,
            employmentIds: entity.employmentIds
        };
    }
}
