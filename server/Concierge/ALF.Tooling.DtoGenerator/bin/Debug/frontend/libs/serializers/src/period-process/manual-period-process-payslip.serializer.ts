import { ManualPeriodProcessDigipostPayslipSerializer } from "./manual-period-process-digipost-payslip.serializer";
import { ManualPeriodProcessEmailPayslipSerializer } from "./manual-period-process-email-payslip.serializer";
import { ManualPeriodProcessPaperPayslipSerializer } from "./manual-period-process-paper-payslip.serializer";
import { ManualPeriodProcessDigipostPayslip } from "@alf/models/period-process/manual-period-process-digipost-payslip";
import { ManualPeriodProcessEmailPayslip } from "@alf/models/period-process/manual-period-process-email-payslip";
import { ManualPeriodProcessPaperPayslip } from "@alf/models/period-process/manual-period-process-paper-payslip";
import { Serializer } from "@alf/core/models";
import { ManualPeriodProcessPayslip } from "@alf/models/period-process/manual-period-process-payslip";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessPayslipSerializer implements Serializer<ManualPeriodProcessPayslip> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcessPayslip
    deserialize(data: any): ManualPeriodProcessPayslip | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessDigipostPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessDigipostPayslipSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessEmailPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessEmailPayslipSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPaperPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessPaperPayslipSerializer().deserialize(data);

        const copy = { ...data };

        return new ManualPeriodProcessPayslip(copy);
    }

    serialize(entity: ManualPeriodProcessPayslip | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcessPayslip, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcessPayslip | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessDigipostPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessDigipostPayslipSerializer().serialize(entity as ManualPeriodProcessDigipostPayslip, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessEmailPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessEmailPayslipSerializer().serialize(entity as ManualPeriodProcessEmailPayslip, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPaperPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessPaperPayslipSerializer().serialize(entity as ManualPeriodProcessPaperPayslip, _forceTypeHint);

        return {
            $type: entity.$type,
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
