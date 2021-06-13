import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { WageFrameItemExtendedInformation } from "@alf/models/extended-information/wage-frame-item-extended-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class WageFrameItemExtendedInformationSerializer implements Serializer<WageFrameItemExtendedInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): WageFrameItemExtendedInformation
    deserialize(data: any): WageFrameItemExtendedInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.fromDate = new Date(copy.fromDate);

        return new WageFrameItemExtendedInformation(copy);
    }

    serialize(entity: WageFrameItemExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: WageFrameItemExtendedInformation, _forceTypeHint?: boolean): any
    serialize(entity: WageFrameItemExtendedInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? WageFrameItemExtendedInformation.typeNameHint : undefined,
            fromDate: serializeDate(entity.fromDate)
        };
    }
}
