import { DateOffsetSerializer } from "./date-offset.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { TestRelativeDateFormula } from "@alf/models/relative-date/test-relative-date-formula";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TestRelativeDateFormulaSerializer implements Serializer<TestRelativeDateFormula> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TestRelativeDateFormula
    deserialize(data: any): TestRelativeDateFormula | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.testDate = new Date(copy.testDate);

        copy.offsets = (copy.offsets || []).map(new DateOffsetSerializer().deserialize);

        return new TestRelativeDateFormula(copy);
    }

    serialize(entity: TestRelativeDateFormula | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TestRelativeDateFormula, _forceTypeHint?: boolean): any
    serialize(entity: TestRelativeDateFormula | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            testDate: serializeDate(entity.testDate),
            baseDate: entity.baseDate,
            offsets: entity.offsets
                ? entity.offsets.map(e => new DateOffsetSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
