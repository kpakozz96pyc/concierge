import { Serializer } from "@alf/core/models";
import { MaintenanceMessage } from "@alf/models/maintenance-messages/maintenance-message";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MaintenanceMessageSerializer implements Serializer<MaintenanceMessage> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MaintenanceMessage
    deserialize(data: any): MaintenanceMessage | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.published = new Date(copy.published);

        if (copy.endPublished !== undefined)
            copy.endPublished = new Date(copy.endPublished);

        return new MaintenanceMessage(copy);
    }

    serialize(entity: MaintenanceMessage | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MaintenanceMessage, _forceTypeHint?: boolean): any
    serialize(entity: MaintenanceMessage | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? MaintenanceMessage.typeNameHint : undefined,
            id: entity.id,
            title: entity.title,
            body: entity.body,
            published: entity.published
                ? entity.published.toISOString()
                : undefined,
            endPublished: entity.endPublished
                ? entity.endPublished.toISOString()
                : undefined
        };
    }
}
