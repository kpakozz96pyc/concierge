import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessDigipostPayslip } from "@alf/models/period-process/manual-period-process-digipost-payslip";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessDigipostPayslipSerializer implements Serializer<ManualPeriodProcessDigipostPayslip> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessDigipostPayslip
    deserialize(data: any): ManualPeriodProcessDigipostPayslip | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ManualPeriodProcessDigipostPayslip(copy);
    }

    serialize(entity: ManualPeriodProcessDigipostPayslip | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessDigipostPayslip, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessDigipostPayslip | undefined, _forceTypeHint?: boolean): any | undefined {
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
