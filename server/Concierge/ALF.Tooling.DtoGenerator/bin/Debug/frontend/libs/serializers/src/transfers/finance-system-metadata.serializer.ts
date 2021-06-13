import { FinanceSystemFreeFieldSerializer } from "./finance-system-free-field.serializer";
import { Serializer } from "@alf/core/models";
import { FinanceSystemMetadata } from "@alf/models/transfers/finance-system-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FinanceSystemMetadataSerializer implements Serializer<FinanceSystemMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FinanceSystemMetadata
    deserialize(data: any): FinanceSystemMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.fields = (copy.fields || []).map(new FinanceSystemFreeFieldSerializer().deserialize);

        return new FinanceSystemMetadata(copy);
    }

    serialize(entity: FinanceSystemMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FinanceSystemMetadata, _forceTypeHint?: boolean): any
    serialize(entity: FinanceSystemMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FinanceSystemMetadata.typeNameHint : undefined,
            description: entity.description,
            accountingSystemName: entity.accountingSystemName,
            split: entity.split,
            resolvedFileName: entity.resolvedFileName,
            fields: entity.fields
                ? entity.fields.map(e => new FinanceSystemFreeFieldSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
