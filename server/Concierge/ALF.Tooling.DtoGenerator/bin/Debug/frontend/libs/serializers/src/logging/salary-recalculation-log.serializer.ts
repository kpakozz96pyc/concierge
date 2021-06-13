import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SalaryRecalculationLog } from "@alf/models/logging/salary-recalculation-log";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SalaryRecalculationLogSerializer implements Serializer<SalaryRecalculationLog> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SalaryRecalculationLog
    deserialize(data: any): SalaryRecalculationLog | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.fromDate !== undefined)
            copy.fromDate = new Date(copy.fromDate);

        copy.changedDate = new Date(copy.changedDate);

        if (copy.handledAt !== undefined)
            copy.handledAt = new Date(copy.handledAt);

        return new SalaryRecalculationLog(copy);
    }

    serialize(entity: SalaryRecalculationLog | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SalaryRecalculationLog, _forceTypeHint?: boolean): any
    serialize(entity: SalaryRecalculationLog | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SalaryRecalculationLog.typeNameHint : undefined,
            id: entity.id,
            code: entity.code,
            companyId: entity.companyId,
            employeeNumber: entity.employeeNumber,
            fromDate: serializeDate(entity.fromDate),
            changedDate: entity.changedDate
                ? entity.changedDate.toISOString()
                : undefined,
            changedBy: entity.changedBy,
            changeInfo: entity.changeInfo,
            handled: entity.handled,
            handledAt: entity.handledAt
                ? entity.handledAt.toISOString()
                : undefined,
            handledBy: entity.handledBy
        };
    }
}
