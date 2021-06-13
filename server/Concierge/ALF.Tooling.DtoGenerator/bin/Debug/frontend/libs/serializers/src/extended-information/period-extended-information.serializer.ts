import { Serializer } from "@alf/core/models";
import { PeriodExtendedInformation } from "@alf/models/extended-information/period-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodExtendedInformationSerializer implements Serializer<PeriodExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodExtendedInformation
    deserialize(data: any): PeriodExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PeriodExtendedInformation(copy);
    }

    serialize(entity: PeriodExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: PeriodExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodExtendedInformation.typeNameHint : undefined,
            index: entity.index,
            status: entity.status,
            state: entity.state,
            month: entity.month,
            year: entity.year
        };
    }
}
