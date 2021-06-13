import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { AbsenceCaseAccountingTransaction } from "@alf/models/accounting-transactions/absence-case-accounting-transaction";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCaseAccountingTransactionSerializer implements Serializer<AbsenceCaseAccountingTransaction> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCaseAccountingTransaction
    deserialize(data: any): AbsenceCaseAccountingTransaction | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.from = new Date(copy.from);

        copy.to = new Date(copy.to);

        if (copy.transferedToAccountingDate !== undefined)
            copy.transferedToAccountingDate = new Date(copy.transferedToAccountingDate);

        return new AbsenceCaseAccountingTransaction(copy);
    }

    serialize(entity: AbsenceCaseAccountingTransaction | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCaseAccountingTransaction, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCaseAccountingTransaction | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceCaseAccountingTransaction.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeId: entity.employeeId,
            from: serializeDate(entity.from),
            to: serializeDate(entity.to),
            amount: entity.amount,
            accountingCode: entity.accountingCode,
            accountId: entity.accountId,
            dimensionA: entity.dimensionA,
            dimensionB: entity.dimensionB,
            dimensionC: entity.dimensionC,
            dimensionD: entity.dimensionD,
            projectDimension1: entity.projectDimension1,
            projectDimension2: entity.projectDimension2,
            projectDimension3: entity.projectDimension3,
            projectDimension4: entity.projectDimension4,
            projectDimension5: entity.projectDimension5,
            projectDimension6Amount: entity.projectDimension6Amount,
            projectDimension6Hours: entity.projectDimension6Hours,
            bankAccountType: entity.bankAccountType,
            mvaCode: entity.mvaCode,
            accountingVoucherCode: entity.accountingVoucherCode,
            accountingVoucherType: entity.accountingVoucherType,
            transferedToAccountingDate: entity.transferedToAccountingDate
                ? entity.transferedToAccountingDate.toISOString()
                : undefined,
            accountingType: entity.accountingType,
            absenceCaseTransactionId: entity.absenceCaseTransactionId,
            accountingPeriod: entity.accountingPeriod,
            employersTaxZone: entity.employersTaxZone
        };
    }
}
