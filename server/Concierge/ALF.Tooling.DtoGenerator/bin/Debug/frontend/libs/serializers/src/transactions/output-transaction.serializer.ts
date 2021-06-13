import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { OutputTransaction } from "@alf/models/transactions/output-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class OutputTransactionSerializer implements Serializer<OutputTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): OutputTransaction
    deserialize(data: any): OutputTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.approvedOn !== undefined)
            copy.approvedOn = new Date(copy.approvedOn);

        if (copy.authorizedOn !== undefined)
            copy.authorizedOn = new Date(copy.authorizedOn);

        if (copy.changedAt !== undefined)
            copy.changedAt = new Date(copy.changedAt);

        if (copy.createdAt !== undefined)
            copy.createdAt = new Date(copy.createdAt);

        if (copy.endDate !== undefined)
            copy.endDate = new Date(copy.endDate);

        if (copy.startDate !== undefined)
            copy.startDate = new Date(copy.startDate);

        return new OutputTransaction(copy);
    }

    serialize(entity: OutputTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: OutputTransaction, _forceTypeHint?: boolean): any
    serialize(entity: OutputTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? OutputTransaction.typeNameHint : undefined,
            id: entity.id,
            payCodeNumber: entity.payCodeNumber,
            periodId: entity.periodId,
            periodNumber: entity.periodNumber,
            employeeId: entity.employeeId,
            companyId: entity.companyId,
            employmentId: entity.employmentId,
            payCodeId: entity.payCodeId,
            calculatedFromInputTransactionType: entity.calculatedFromInputTransactionType,
            calculatedFromTransactionId: entity.calculatedFromTransactionId,
            accountingAccount: entity.accountingAccount,
            accountingCodeId: entity.accountingCodeId,
            accountingCodeVat: entity.accountingCodeVat,
            accountingLedgerType: entity.accountingLedgerType,
            activityCode: entity.activityCode,
            amount: entity.amount,
            appendix: entity.appendix,
            appendixCodeAccounting: entity.appendixCodeAccounting,
            appendixTypeAccounting: entity.appendixTypeAccounting,
            approvedBy: entity.approvedBy,
            approvedOn: serializeDate(entity.approvedOn),
            authorizedBy: entity.authorizedBy,
            authorizedOn: serializeDate(entity.authorizedOn),
            changedAt: entity.changedAt
                ? entity.changedAt.toISOString()
                : undefined,
            companyCarId: entity.companyCarId,
            costDimensionA: entity.costDimensionA,
            costDimensionB: entity.costDimensionB,
            costDimensionC: entity.costDimensionC,
            costDimensionD: entity.costDimensionD,
            countryCode: entity.countryCode,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            customerIdentificationNumber: entity.customerIdentificationNumber,
            description: entity.description,
            endDate: serializeDate(entity.endDate),
            hours: entity.hours,
            lockTransactionES4: entity.lockTransactionES4,
            municipalityId: entity.municipalityId,
            objectId: entity.objectId,
            organizationId: entity.organizationId,
            ownerOfDeduction: entity.ownerOfDeduction,
            payToAccount: entity.payToAccount,
            positionPercentage: entity.positionPercentage,
            principalId: entity.principalId,
            principalReference: entity.principalReference,
            projectDimension1: entity.projectDimension1,
            projectDimension2: entity.projectDimension2,
            projectDimension3: entity.projectDimension3,
            projectDimension4: entity.projectDimension4,
            projectDimension5: entity.projectDimension5,
            projectDimension6Amount: entity.projectDimension6Amount,
            projectDimension6Hours: entity.projectDimension6Hours,
            quantity: entity.quantity,
            rate: entity.rate,
            regulativeId: entity.regulativeId,
            regulativeBId: entity.regulativeBId,
            startDate: serializeDate(entity.startDate),
            taxationRule: entity.taxationRule,
            transactionSequenceNumber: entity.transactionSequenceNumber,
            wageStep: entity.wageStep,
            wageStepB: entity.wageStepB,
            week: entity.week
        };
    }
}
