import { Serializer } from "@alf/core/models";
import { Tip } from "@alf/models/tip-of-the-day/tip";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TipSerializer implements Serializer<Tip> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Tip
    deserialize(data: any): Tip | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new Tip(copy);
    }

    serialize(entity: Tip | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Tip, _forceTypeHint?: boolean): any
    serialize(entity: Tip | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Tip.typeNameHint : undefined,
            id: entity.id,
            text: entity.text
        };
    }
}
