import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessEmailPayslip } from "@alf/models/period-process/manual-period-process-email-payslip";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessEmailPayslipSerializer implements Serializer<ManualPeriodProcessEmailPayslip> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessEmailPayslip
    deserialize(data: any): ManualPeriodProcessEmailPayslip | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ManualPeriodProcessEmailPayslip(copy);
    }

    serialize(entity: ManualPeriodProcessEmailPayslip | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessEmailPayslip, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessEmailPayslip | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            actions: entity.actions,
            id: entity.id,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            periodId: entity.periodId,
            ordering: entity.ordering,
            periodProcessType: entity.periodProcessType,
            status: entity.status,
            statusDetails: entity.statusDetails,
            waitingForJobId: entity.waitingForJobId
        };
    }
}
