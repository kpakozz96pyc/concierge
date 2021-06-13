import { Serializer } from "@alf/core/models";
import { AltinnMessageFile } from "@alf/models/altinn/altinn-message-file";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AltinnMessageFileSerializer implements Serializer<AltinnMessageFile> {

    deserialize(data: undefined): undefined
    deserialize(data: any): AltinnMessageFile
    deserialize(data: any): AltinnMessageFile | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new AltinnMessageFile(copy);
    }

    serialize(entity: AltinnMessageFile | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: AltinnMessageFile, _forceTypeHint?: boolean): any
    serialize(entity: AltinnMessageFile | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? AltinnMessageFile.typeNameHint : undefined,
            binaryItemId: entity.binaryItemId,
            fileName: entity.fileName,
            mimeType: entity.mimeType
        };
    }
}
