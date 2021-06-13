import { TaxInformationPartSerializer } from "./tax-information-part.serializer";
import { Serializer } from "@alf/core/models";
import { TaxInformationPartChanges } from "@alf/models/tax/tax-information-part-changes";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationPartChangesSerializer implements Serializer<TaxInformationPartChanges> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TaxInformationPartChanges
    deserialize(data: any): TaxInformationPartChanges | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.added = (copy.added || []).map(new TaxInformationPartSerializer().deserialize);

        return new TaxInformationPartChanges(copy);
    }

    serialize(entity: TaxInformationPartChanges | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TaxInformationPartChanges, _forceTypeHint?: boolean): any
    serialize(entity: TaxInformationPartChanges | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TaxInformationPartChanges.typeNameHint : undefined,
            added: entity.added
                ? entity.added.map(e => new TaxInformationPartSerializer().serialize(e, _forceTypeHint))
                : undefined,
            modified: entity.modified,
            deleted: entity.deleted
        };
    }
}
