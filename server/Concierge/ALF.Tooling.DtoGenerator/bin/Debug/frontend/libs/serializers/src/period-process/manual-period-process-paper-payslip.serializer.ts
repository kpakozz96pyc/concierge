import { ReportDataSerializer } from "../reports/report-data.serializer";
import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessPaperPayslip } from "@alf/models/period-process/manual-period-process-paper-payslip";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessPaperPayslipSerializer implements Serializer<ManualPeriodProcessPaperPayslip> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessPaperPayslip
    deserialize(data: any): ManualPeriodProcessPaperPayslip | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.reportData = new ReportDataSerializer().deserialize(copy.reportData);

        return new ManualPeriodProcessPaperPayslip(copy);
    }

    serialize(entity: ManualPeriodProcessPaperPayslip | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessPaperPayslip, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessPaperPayslip | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            reportData: new ReportDataSerializer().serialize(entity.reportData, _forceTypeHint),
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
