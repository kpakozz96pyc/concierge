import { Serializer } from "@alf/core/models";
import { TicketMetadata } from "@alf/models/core/ticket-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TicketMetadataSerializer implements Serializer<TicketMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): TicketMetadata
    deserialize(data: any): TicketMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.validUntil = new Date(copy.validUntil);

        return new TicketMetadata(copy);
    }

    serialize(entity: TicketMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: TicketMetadata, _forceTypeHint?: boolean): any
    serialize(entity: TicketMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? TicketMetadata.typeNameHint : undefined,
            ticketId: entity.ticketId,
            validUntil: entity.validUntil
                ? entity.validUntil.toISOString()
                : undefined,
            ticket: entity.ticket
        };
    }
}
