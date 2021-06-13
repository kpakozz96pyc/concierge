import { Serializer } from "@alf/core/models";
import { AltinnMock } from "@alf/models/altinn/altinn-mock";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AltinnMockSerializer implements Serializer<AltinnMock> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AltinnMock
    deserialize(data: any): AltinnMock | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        return new AltinnMock(copy);
    }

    serialize(entity: AltinnMock | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AltinnMock, _forceTypeHint?: boolean): any
    serialize(entity: AltinnMock | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AltinnMock.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            binaryItemId: entity.binaryItemId,
            active: entity.active,
            fileName: entity.fileName,
            listOfFiles: entity.listOfFiles
        };
    }
}
