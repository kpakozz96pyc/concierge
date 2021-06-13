import { ManualPeriodProcessBankTransferBankFileSerializer } from "./manual-period-process-bank-transfer-bank-file.serializer";
import { ManualPeriodProcessBankTransferGenerateHeapSerializer } from "./manual-period-process-bank-transfer-generate-heap.serializer";
import { ManualPeriodProcessClosingPeriodSerializer } from "./manual-period-process-closing-period.serializer";
import { ManualPeriodProcessCostAccountingFileSerializer } from "./manual-period-process-cost-accounting-file.serializer";
import { ManualPeriodProcessCostAccountingGenerateHeapSerializer } from "./manual-period-process-cost-accounting-generate-heap.serializer";
import { ManualPeriodProcessPayslipSerializer } from "./manual-period-process-payslip.serializer";
import { ManualPeriodProcessPeriodCompletionSerializer } from "./manual-period-process-period-completion.serializer";
import { ManualPeriodProcessSalaryCalculationSerializer } from "./manual-period-process-salary-calculation.serializer";
import { ManualPeriodProcessDigipostPayslipSerializer } from "./manual-period-process-digipost-payslip.serializer";
import { ManualPeriodProcessEmailPayslipSerializer } from "./manual-period-process-email-payslip.serializer";
import { ManualPeriodProcessPaperPayslipSerializer } from "./manual-period-process-paper-payslip.serializer";
import { ManualPeriodProcessBankTransferBankFile } from "@alf/models/period-process/manual-period-process-bank-transfer-bank-file";
import { ManualPeriodProcessBankTransferGenerateHeap } from "@alf/models/period-process/manual-period-process-bank-transfer-generate-heap";
import { ManualPeriodProcessClosingPeriod } from "@alf/models/period-process/manual-period-process-closing-period";
import { ManualPeriodProcessCostAccountingFile } from "@alf/models/period-process/manual-period-process-cost-accounting-file";
import { ManualPeriodProcessCostAccountingGenerateHeap } from "@alf/models/period-process/manual-period-process-cost-accounting-generate-heap";
import { ManualPeriodProcessPayslip } from "@alf/models/period-process/manual-period-process-payslip";
import { ManualPeriodProcessPeriodCompletion } from "@alf/models/period-process/manual-period-process-period-completion";
import { ManualPeriodProcessSalaryCalculation } from "@alf/models/period-process/manual-period-process-salary-calculation";
import { ManualPeriodProcessDigipostPayslip } from "@alf/models/period-process/manual-period-process-digipost-payslip";
import { ManualPeriodProcessEmailPayslip } from "@alf/models/period-process/manual-period-process-email-payslip";
import { ManualPeriodProcessPaperPayslip } from "@alf/models/period-process/manual-period-process-paper-payslip";
import { Serializer } from "@alf/core/models";
import { ManualPeriodProcess } from "@alf/models/period-process/manual-period-process";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ManualPeriodProcessSerializer implements Serializer<ManualPeriodProcess> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ManualPeriodProcess
    deserialize(data: any): ManualPeriodProcess | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessBankTransferBankFile, ALF.Shared.Dto")
            return new ManualPeriodProcessBankTransferBankFileSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessBankTransferGenerateHeap, ALF.Shared.Dto")
            return new ManualPeriodProcessBankTransferGenerateHeapSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessClosingPeriod, ALF.Shared.Dto")
            return new ManualPeriodProcessClosingPeriodSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessCostAccountingFile, ALF.Shared.Dto")
            return new ManualPeriodProcessCostAccountingFileSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessCostAccountingGenerateHeap, ALF.Shared.Dto")
            return new ManualPeriodProcessCostAccountingGenerateHeapSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessPayslipSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPeriodCompletion, ALF.Shared.Dto")
            return new ManualPeriodProcessPeriodCompletionSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessSalaryCalculation, ALF.Shared.Dto")
            return new ManualPeriodProcessSalaryCalculationSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessDigipostPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessDigipostPayslipSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessEmailPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessEmailPayslipSerializer().deserialize(data);

        if (data.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPaperPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessPaperPayslipSerializer().deserialize(data);

        const copy = { ...data };

        return new ManualPeriodProcess(copy);
    }

    serialize(entity: ManualPeriodProcess | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ManualPeriodProcess, _forceTypeHint?: boolean): any
    serialize(entity: ManualPeriodProcess | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessBankTransferBankFile, ALF.Shared.Dto")
            return new ManualPeriodProcessBankTransferBankFileSerializer().serialize(entity as ManualPeriodProcessBankTransferBankFile, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessBankTransferGenerateHeap, ALF.Shared.Dto")
            return new ManualPeriodProcessBankTransferGenerateHeapSerializer().serialize(entity as ManualPeriodProcessBankTransferGenerateHeap, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessClosingPeriod, ALF.Shared.Dto")
            return new ManualPeriodProcessClosingPeriodSerializer().serialize(entity as ManualPeriodProcessClosingPeriod, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessCostAccountingFile, ALF.Shared.Dto")
            return new ManualPeriodProcessCostAccountingFileSerializer().serialize(entity as ManualPeriodProcessCostAccountingFile, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessCostAccountingGenerateHeap, ALF.Shared.Dto")
            return new ManualPeriodProcessCostAccountingGenerateHeapSerializer().serialize(entity as ManualPeriodProcessCostAccountingGenerateHeap, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessPayslipSerializer().serialize(entity as ManualPeriodProcessPayslip, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPeriodCompletion, ALF.Shared.Dto")
            return new ManualPeriodProcessPeriodCompletionSerializer().serialize(entity as ManualPeriodProcessPeriodCompletion, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessSalaryCalculation, ALF.Shared.Dto")
            return new ManualPeriodProcessSalaryCalculationSerializer().serialize(entity as ManualPeriodProcessSalaryCalculation, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessDigipostPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessDigipostPayslipSerializer().serialize(entity as ManualPeriodProcessDigipostPayslip, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessEmailPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessEmailPayslipSerializer().serialize(entity as ManualPeriodProcessEmailPayslip, _forceTypeHint);

        if (entity.$type === "ALF.Shared.Dto.Models.Process.PeriodProcess.ManualPeriodProcessPaperPayslip, ALF.Shared.Dto")
            return new ManualPeriodProcessPaperPayslipSerializer().serialize(entity as ManualPeriodProcessPaperPayslip, _forceTypeHint);

        return {
            $type: _forceTypeHint ? ManualPeriodProcess.typeNameHint : undefined,
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
