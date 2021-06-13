import { Serializer } from "@alf/core/models";
import { ServerError } from "@alf/models/errors/server-error";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ServerErrorSerializer implements Serializer<ServerError> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ServerError
    deserialize(data: any): ServerError | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ServerError(copy);
    }

    serialize(entity: ServerError | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ServerError, _forceTypeHint?: boolean): any
    serialize(entity: ServerError | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ServerError.typeNameHint : undefined,
            id: entity.id,
            message: entity.message,
            detailedMessage: entity.detailedMessage,
            stackTrace: entity.stackTrace
        };
    }
}
