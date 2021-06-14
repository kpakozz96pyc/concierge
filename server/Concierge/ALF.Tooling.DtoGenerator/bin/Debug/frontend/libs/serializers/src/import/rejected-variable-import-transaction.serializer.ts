﻿import { Serializer } from "@alf/core/models";
import { RejectedVariableImportTransaction } from "@alf/models/import/rejected-variable-import-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RejectedVariableImportTransactionSerializer implements Serializer<RejectedVariableImportTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RejectedVariableImportTransaction
    deserialize(data: any): RejectedVariableImportTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new RejectedVariableImportTransaction(copy);
    }

    serialize(entity: RejectedVariableImportTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RejectedVariableImportTransaction, _forceTypeHint?: boolean): any
    serialize(entity: RejectedVariableImportTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? RejectedVariableImportTransaction.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            heapNumber: entity.heapNumber,
            periodNumber: entity.periodNumber,
            employeeNumber: entity.employeeNumber,
            payCodeNumber: entity.payCodeNumber,
            transactionSequenceNumber: entity.transactionSequenceNumber,
            rejectionMessage: entity.rejectionMessage,
            positionCode: entity.positionCode,
            employmentSequenceNumber: entity.employmentSequenceNumber,
            startDate: entity.startDate,
            endDate: entity.endDate,
            appendix: entity.appendix,
            description: entity.description,
            organizationId: entity.organizationId,
            week: entity.week,
            quantity: entity.quantity,
            hours: entity.hours,
            rate: entity.rate,
            amount: entity.amount,
            accountingCodeId: entity.accountingCodeId,
            accountingAccount: entity.accountingAccount,
            costDimensionA: entity.costDimensionA,
            costDimensionB: entity.costDimensionB,
            costDimensionC: entity.costDimensionC,
            costDimensionD: entity.costDimensionD,
            projectDimension1: entity.projectDimension1,
            projectDimension2: entity.projectDimension2,
            projectDimension3: entity.projectDimension3,
            projectDimension4: entity.projectDimension4,
            projectDimension5: entity.projectDimension5,
            projectDimension6Amount: entity.projectDimension6Amount,
            projectDimension6Hours: entity.projectDimension6Hours,
            accountingLedgerType: entity.accountingLedgerType,
            accountingCodeVat: entity.accountingCodeVat,
            appendixCodeAccounting: entity.appendixCodeAccounting,
            appendixTypeAccounting: entity.appendixTypeAccounting,
            codeAccountNumber: entity.codeAccountNumber,
            ownerOfDeduction: entity.ownerOfDeduction,
            municipalityId: entity.municipalityId,
            regulativeId: entity.regulativeId,
            wageStep: entity.wageStep,
            regulativeBId: entity.regulativeBId,
            wageStepB: entity.wageStepB,
            positionPercentage: entity.positionPercentage,
            approvedBy: entity.approvedBy,
            approvedOn: entity.approvedOn,
            authorizedBy: entity.authorizedBy,
            authorizedOn: entity.authorizedOn,
            note: entity.note,
            countryCode: entity.countryCode,
            principalId: entity.principalId,
            principalReference: entity.principalReference,
            postalCode: entity.postalCode,
            payrollPeriodRetroPay: entity.payrollPeriodRetroPay,
            linkId: entity.linkId,
            lockTransactionES4: entity.lockTransactionES4,
            payToAccount: entity.payToAccount,
            userId: entity.userId,
            taxationRule: entity.taxationRule,
            budgetTypeId: entity.budgetTypeId,
            status: entity.status,
            companyCarId: entity.companyCarId,
            carSequenceNumber: entity.carSequenceNumber,
            externalUniqueId: entity.externalUniqueId,
            changedDate: entity.changedDate,
            changedTime: entity.changedTime,
            origin: entity.origin,
            transFunction: entity.transFunction,
            integrationKey1: entity.integrationKey1,
            integrationKey2: entity.integrationKey2,
            integrationKey3: entity.integrationKey3,
            integrationKey4: entity.integrationKey4,
            integrationKey5: entity.integrationKey5,
            numberOfHours: entity.numberOfHours,
            numberOfHoursIndicator: entity.numberOfHoursIndicator,
            operationId: entity.operationId,
            changedAtTime: entity.changedAtTime,
            objectType: entity.objectType,
            objectId: entity.objectId,
            objectSequenceNumber: entity.objectSequenceNumber,
            organizationIdService: entity.organizationIdService,
            positionIdService: entity.positionIdService,
            actCode: entity.actCode,
            customerIdentificationNumber: entity.customerIdentificationNumber,
            jobId: entity.jobId,
            externalEmployeeId: entity.externalEmployeeId
        };
    }
}