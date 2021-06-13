import { Serializer } from "@alf/core/models";
import { IncomeTransactionLine } from "@alf/models/income/income-transaction-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeTransactionLineSerializer implements Serializer<IncomeTransactionLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeTransactionLine
    deserialize(data: any): IncomeTransactionLine | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new IncomeTransactionLine(copy);
    }

    serialize(entity: IncomeTransactionLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeTransactionLine, _forceTypeHint?: boolean): any
    serialize(entity: IncomeTransactionLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IncomeTransactionLine.typeNameHint : undefined,
            outputTransactionId: entity.outputTransactionId,
            description: entity.description,
            amount: entity.amount,
            periodId: entity.periodId
        };
    }
}
