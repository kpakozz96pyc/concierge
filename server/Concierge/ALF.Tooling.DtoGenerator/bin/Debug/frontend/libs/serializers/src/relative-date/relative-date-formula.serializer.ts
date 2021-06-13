import { DateOffsetSerializer } from "./date-offset.serializer";
import { TestRelativeDateFormulaSerializer } from "./test-relative-date-formula.serializer";
import { TestRelativeDateFormula } from "@alf/models/relative-date/test-relative-date-formula";
import { Serializer } from "@alf/core/models";
import { RelativeDateFormula } from "@alf/models/relative-date/relative-date-formula";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RelativeDateFormulaSerializer implements Serializer<RelativeDateFormula> {

    deserialize(data: undefined): undefined
    deserialize(data: any): RelativeDateFormula
    deserialize(data: any): RelativeDateFormula | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.RelativeDate.TestRelativeDateFormula, ALF.Shared.Dto")
            return new TestRelativeDateFormulaSerializer().deserialize(data);

        const copy = { ...data };
        copy.offsets = (copy.offsets || []).map(new DateOffsetSerializer().deserialize);

        return new RelativeDateFormula(copy);
    }

    serialize(entity: RelativeDateFormula | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: RelativeDateFormula, _forceTypeHint?: boolean): any
    serialize(entity: RelativeDateFormula | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.RelativeDate.TestRelativeDateFormula, ALF.Shared.Dto")
            return new TestRelativeDateFormulaSerializer().serialize(entity as TestRelativeDateFormula, _forceTypeHint);

        return {
            $type: _forceTypeHint ? RelativeDateFormula.typeNameHint : undefined,
            baseDate: entity.baseDate,
            offsets: entity.offsets
                ? entity.offsets.map(e => new DateOffsetSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
