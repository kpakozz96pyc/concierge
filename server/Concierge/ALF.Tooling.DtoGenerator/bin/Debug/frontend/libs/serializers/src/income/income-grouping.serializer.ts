import { IncomeTransactionLineSerializer } from "./income-transaction-line.serializer";
import { Serializer } from "@alf/core/models";
import { IncomeGrouping } from "@alf/models/income/income-grouping";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class IncomeGroupingSerializer implements Serializer<IncomeGrouping> {

    deserialize(data: undefined): undefined
    deserialize(data: any): IncomeGrouping
    deserialize(data: any): IncomeGrouping | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.incomeTransactionLines = (copy.incomeTransactionLines || []).map(new IncomeTransactionLineSerializer().deserialize);

        return new IncomeGrouping(copy);
    }

    serialize(entity: IncomeGrouping | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: IncomeGrouping, _forceTypeHint?: boolean): any
    serialize(entity: IncomeGrouping | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? IncomeGrouping.typeNameHint : undefined,
            description: entity.description,
            amount: entity.amount,
            quantity: entity.quantity,
            isTaxable: entity.isTaxable,
            details: entity.details,
            incomeTransactionLines: entity.incomeTransactionLines
                ? entity.incomeTransactionLines.map(e => new IncomeTransactionLineSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
