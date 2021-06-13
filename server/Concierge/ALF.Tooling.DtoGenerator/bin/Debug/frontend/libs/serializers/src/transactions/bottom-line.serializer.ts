import { DisbursementSerializer } from "./disbursement.serializer";
import { Serializer } from "@alf/core/models";
import { BottomLine } from "@alf/models/transactions/bottom-line";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class BottomLineSerializer implements Serializer<BottomLine> {

    deserialize(data: undefined): undefined
    deserialize(data: any): BottomLine
    deserialize(data: any): BottomLine | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.disbursements = (copy.disbursements || []).map(new DisbursementSerializer().deserialize);

        return new BottomLine(copy);
    }

    serialize(entity: BottomLine | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: BottomLine, _forceTypeHint?: boolean): any
    serialize(entity: BottomLine | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? BottomLine.typeNameHint : undefined,
            periodVacationPayBasis: entity.periodVacationPayBasis,
            periodTax: entity.periodTax,
            accumulatedVacationPayBasis: entity.accumulatedVacationPayBasis,
            accumulatedTax: entity.accumulatedTax,
            disbursements: entity.disbursements
                ? entity.disbursements.map(e => new DisbursementSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
