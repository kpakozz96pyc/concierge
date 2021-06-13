import { PeriodStatus } from "@alf/models/periods/enums/period-status";
import { PeriodStatusActivity } from "@alf/models/periods/enums/period-status-activity";
import { PeriodTaxDeductionType } from "@alf/models/periods/enums/period-tax-deduction-type";
import { PeriodGarnishmentsType } from "@alf/models/periods/enums/period-garnishments-type";
import { StopTransactionSerializer } from "./stop-transaction.serializer";
import { PeriodTextSerializer } from "./period-text.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { PayrollPeriod } from "@alf/models/periods/payroll-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayrollPeriodSerializer implements Serializer<PayrollPeriod> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayrollPeriod
    deserialize(data: any): PayrollPeriod | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.payDate = new Date(copy.payDate);

        if (copy.availableDate !== undefined)
            copy.availableDate = new Date(copy.availableDate);

        copy.status = PeriodStatus[copy.status];

        copy.statusDate = new Date(copy.statusDate);

        copy.statusActivity = PeriodStatusActivity[copy.statusActivity];

        copy.tableTaxDeduction = PeriodTaxDeductionType[copy.tableTaxDeduction];

        copy.percentTaxDeduction = PeriodTaxDeductionType[copy.percentTaxDeduction];

        copy.tableGarnishments = PeriodGarnishmentsType[copy.tableGarnishments];

        copy.percentGarnishments = PeriodGarnishmentsType[copy.percentGarnishments];

        copy.startDate = new Date(copy.startDate);

        copy.endDate = new Date(copy.endDate);

        copy.stopTransactions = (copy.stopTransactions || []).map(new StopTransactionSerializer().deserialize);

        copy.texts = (copy.texts || []).map(new PeriodTextSerializer().deserialize);

        if (copy.instantiateProcessPlanOnDate !== undefined)
            copy.instantiateProcessPlanOnDate = new Date(copy.instantiateProcessPlanOnDate);

        return new PayrollPeriod(copy);
    }

    serialize(entity: PayrollPeriod | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayrollPeriod, _forceTypeHint?: boolean): any
    serialize(entity: PayrollPeriod | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayrollPeriod.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            periodNumber: entity.periodNumber,
            periodPlanId: entity.periodPlanId,
            processPlanId: entity.processPlanId,
            isEmpty: entity.isEmpty,
            isDone: entity.isDone,
            processPlanWillBeInstantiated: entity.processPlanWillBeInstantiated,
            description: entity.description,
            payDate: serializeDate(entity.payDate),
            availableDate: entity.availableDate
                ? entity.availableDate.toISOString()
                : undefined,
            status: PeriodStatus[entity.status],
            statusDate: serializeDate(entity.statusDate),
            statusActivity: PeriodStatusActivity[entity.statusActivity],
            subGroups: entity.subGroups,
            tableTaxDeduction: PeriodTaxDeductionType[entity.tableTaxDeduction],
            percentTaxDeduction: PeriodTaxDeductionType[entity.percentTaxDeduction],
            tableGarnishments: PeriodGarnishmentsType[entity.tableGarnishments],
            percentGarnishments: PeriodGarnishmentsType[entity.percentGarnishments],
            calculateCommonArrangements: entity.calculateCommonArrangements,
            year: entity.year,
            month: entity.month,
            transferTransactionsToNextPeriod: entity.transferTransactionsToNextPeriod,
            calculationsBlocked: entity.calculationsBlocked,
            mainRun: entity.mainRun,
            autoImportBlocked: entity.autoImportBlocked,
            startDate: serializeDate(entity.startDate),
            endDate: serializeDate(entity.endDate),
            processTemplateId: entity.processTemplateId,
            periodState: entity.periodState,
            paymentCycles: entity.paymentCycles,
            stopTransactions: entity.stopTransactions
                ? entity.stopTransactions.map(e => new StopTransactionSerializer().serialize(e, _forceTypeHint))
                : undefined,
            texts: entity.texts
                ? entity.texts.map(e => new PeriodTextSerializer().serialize(e, _forceTypeHint))
                : undefined,
            periodPayType: entity.periodPayType,
            periodType: entity.periodType,
            prepayDeduction: entity.prepayDeduction,
            instantiateProcessPlanOnDate: entity.instantiateProcessPlanOnDate
                ? entity.instantiateProcessPlanOnDate.toISOString()
                : undefined,
            generateVacationPay: entity.generateVacationPay,
            generateDeductionVacationPay: entity.generateDeductionVacationPay
        };
    }
}
