import { Serializer } from "@alf/core/models";
import { DefaultPeriodRange } from "@alf/models/v2/default-period-range";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class DefaultPeriodRangeSerializer implements Serializer<DefaultPeriodRange> {

    deserialize(data: undefined): undefined
    deserialize(data: any): DefaultPeriodRange
    deserialize(data: any): DefaultPeriodRange | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new DefaultPeriodRange(copy);
    }

    serialize(entity: DefaultPeriodRange | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: DefaultPeriodRange, _forceTypeHint?: boolean): any
    serialize(entity: DefaultPeriodRange | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? DefaultPeriodRange.typeNameHint : undefined,
            id: entity.id,
            employeeId: entity.employeeId,
            fromPeriodNumber: entity.fromPeriodNumber,
            toPeriodNumber: entity.toPeriodNumber
        };
    }
}
