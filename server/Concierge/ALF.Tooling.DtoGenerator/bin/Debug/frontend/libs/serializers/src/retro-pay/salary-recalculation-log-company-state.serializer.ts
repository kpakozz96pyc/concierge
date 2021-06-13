import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SalaryRecalculationLogCompanyState } from "@alf/models/retro-pay/salary-recalculation-log-company-state";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SalaryRecalculationLogCompanyStateSerializer implements Serializer<SalaryRecalculationLogCompanyState> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SalaryRecalculationLogCompanyState
    deserialize(data: any): SalaryRecalculationLogCompanyState | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.oldestUnhandled !== undefined)
            copy.oldestUnhandled = new Date(copy.oldestUnhandled);

        return new SalaryRecalculationLogCompanyState(copy);
    }

    serialize(entity: SalaryRecalculationLogCompanyState | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SalaryRecalculationLogCompanyState, _forceTypeHint?: boolean): any
    serialize(entity: SalaryRecalculationLogCompanyState | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SalaryRecalculationLogCompanyState.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            oldestUnhandled: serializeDate(entity.oldestUnhandled)
        };
    }
}
