import { TaxInformationPartChangesSerializer } from "./tax-information-part-changes.serializer";
import { Serializer } from "@alf/core/models";
import { TaxInformationPatchContainer } from "@alf/models/tax/tax-information-patch-container";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TaxInformationPatchContainerSerializer implements Serializer<TaxInformationPatchContainer> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TaxInformationPatchContainer
    deserialize(data: any): TaxInformationPatchContainer | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.parts = new TaxInformationPartChangesSerializer().deserialize(copy.parts);

        return new TaxInformationPatchContainer(copy);
    }

    serialize(entity: TaxInformationPatchContainer | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TaxInformationPatchContainer, _forceTypeHint?: boolean): any
    serialize(entity: TaxInformationPatchContainer | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TaxInformationPatchContainer.typeNameHint : undefined,
            taxInformation: entity.taxInformation,
            parts: new TaxInformationPartChangesSerializer().serialize(entity.parts, _forceTypeHint)
        };
    }
}
