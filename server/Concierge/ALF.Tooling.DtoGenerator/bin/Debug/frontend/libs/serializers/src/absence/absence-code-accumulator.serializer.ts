import { AbsenceCodeAccumulatorBehavior } from "@alf/models/absence/enums/absence-code-accumulator-behavior";
import { Serializer } from "@alf/core/models";
import { AbsenceCodeAccumulator } from "@alf/models/absence/absence-code-accumulator";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AbsenceCodeAccumulatorSerializer implements Serializer<AbsenceCodeAccumulator> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AbsenceCodeAccumulator
    deserialize(data: any): AbsenceCodeAccumulator | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.accumulator01 = AbsenceCodeAccumulatorBehavior[copy.accumulator01];

        copy.accumulator02 = AbsenceCodeAccumulatorBehavior[copy.accumulator02];

        copy.accumulator03 = AbsenceCodeAccumulatorBehavior[copy.accumulator03];

        copy.accumulator04 = AbsenceCodeAccumulatorBehavior[copy.accumulator04];

        copy.accumulator05 = AbsenceCodeAccumulatorBehavior[copy.accumulator05];

        copy.accumulator06 = AbsenceCodeAccumulatorBehavior[copy.accumulator06];

        copy.accumulator07 = AbsenceCodeAccumulatorBehavior[copy.accumulator07];

        copy.accumulator08 = AbsenceCodeAccumulatorBehavior[copy.accumulator08];

        copy.accumulator09 = AbsenceCodeAccumulatorBehavior[copy.accumulator09];

        copy.accumulator10 = AbsenceCodeAccumulatorBehavior[copy.accumulator10];

        copy.accumulator11 = AbsenceCodeAccumulatorBehavior[copy.accumulator11];

        copy.accumulator12 = AbsenceCodeAccumulatorBehavior[copy.accumulator12];

        copy.accumulator13 = AbsenceCodeAccumulatorBehavior[copy.accumulator13];

        copy.accumulator14 = AbsenceCodeAccumulatorBehavior[copy.accumulator14];

        copy.accumulator15 = AbsenceCodeAccumulatorBehavior[copy.accumulator15];

        copy.accumulator16 = AbsenceCodeAccumulatorBehavior[copy.accumulator16];

        copy.accumulator17 = AbsenceCodeAccumulatorBehavior[copy.accumulator17];

        copy.accumulator18 = AbsenceCodeAccumulatorBehavior[copy.accumulator18];

        copy.accumulator19 = AbsenceCodeAccumulatorBehavior[copy.accumulator19];

        copy.accumulator20 = AbsenceCodeAccumulatorBehavior[copy.accumulator20];

        copy.accumulator21 = AbsenceCodeAccumulatorBehavior[copy.accumulator21];

        copy.accumulator22 = AbsenceCodeAccumulatorBehavior[copy.accumulator22];

        copy.accumulator23 = AbsenceCodeAccumulatorBehavior[copy.accumulator23];

        copy.accumulator24 = AbsenceCodeAccumulatorBehavior[copy.accumulator24];

        copy.accumulator25 = AbsenceCodeAccumulatorBehavior[copy.accumulator25];

        copy.accumulator26 = AbsenceCodeAccumulatorBehavior[copy.accumulator26];

        copy.accumulator27 = AbsenceCodeAccumulatorBehavior[copy.accumulator27];

        copy.accumulator28 = AbsenceCodeAccumulatorBehavior[copy.accumulator28];

        copy.accumulator29 = AbsenceCodeAccumulatorBehavior[copy.accumulator29];

        copy.accumulator30 = AbsenceCodeAccumulatorBehavior[copy.accumulator30];

        return new AbsenceCodeAccumulator(copy);
    }

    serialize(entity: AbsenceCodeAccumulator | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AbsenceCodeAccumulator, _forceTypeHint?: boolean): any
    serialize(entity: AbsenceCodeAccumulator | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AbsenceCodeAccumulator.typeNameHint : undefined,
            accumulator01: AbsenceCodeAccumulatorBehavior[entity.accumulator01],
            accumulator02: AbsenceCodeAccumulatorBehavior[entity.accumulator02],
            accumulator03: AbsenceCodeAccumulatorBehavior[entity.accumulator03],
            accumulator04: AbsenceCodeAccumulatorBehavior[entity.accumulator04],
            accumulator05: AbsenceCodeAccumulatorBehavior[entity.accumulator05],
            accumulator06: AbsenceCodeAccumulatorBehavior[entity.accumulator06],
            accumulator07: AbsenceCodeAccumulatorBehavior[entity.accumulator07],
            accumulator08: AbsenceCodeAccumulatorBehavior[entity.accumulator08],
            accumulator09: AbsenceCodeAccumulatorBehavior[entity.accumulator09],
            accumulator10: AbsenceCodeAccumulatorBehavior[entity.accumulator10],
            accumulator11: AbsenceCodeAccumulatorBehavior[entity.accumulator11],
            accumulator12: AbsenceCodeAccumulatorBehavior[entity.accumulator12],
            accumulator13: AbsenceCodeAccumulatorBehavior[entity.accumulator13],
            accumulator14: AbsenceCodeAccumulatorBehavior[entity.accumulator14],
            accumulator15: AbsenceCodeAccumulatorBehavior[entity.accumulator15],
            accumulator16: AbsenceCodeAccumulatorBehavior[entity.accumulator16],
            accumulator17: AbsenceCodeAccumulatorBehavior[entity.accumulator17],
            accumulator18: AbsenceCodeAccumulatorBehavior[entity.accumulator18],
            accumulator19: AbsenceCodeAccumulatorBehavior[entity.accumulator19],
            accumulator20: AbsenceCodeAccumulatorBehavior[entity.accumulator20],
            accumulator21: AbsenceCodeAccumulatorBehavior[entity.accumulator21],
            accumulator22: AbsenceCodeAccumulatorBehavior[entity.accumulator22],
            accumulator23: AbsenceCodeAccumulatorBehavior[entity.accumulator23],
            accumulator24: AbsenceCodeAccumulatorBehavior[entity.accumulator24],
            accumulator25: AbsenceCodeAccumulatorBehavior[entity.accumulator25],
            accumulator26: AbsenceCodeAccumulatorBehavior[entity.accumulator26],
            accumulator27: AbsenceCodeAccumulatorBehavior[entity.accumulator27],
            accumulator28: AbsenceCodeAccumulatorBehavior[entity.accumulator28],
            accumulator29: AbsenceCodeAccumulatorBehavior[entity.accumulator29],
            accumulator30: AbsenceCodeAccumulatorBehavior[entity.accumulator30]
        };
    }
}
