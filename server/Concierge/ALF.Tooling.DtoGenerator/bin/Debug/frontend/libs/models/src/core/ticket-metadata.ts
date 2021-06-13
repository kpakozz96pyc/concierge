

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TicketMetadataId = string;

export class TicketMetadata {

    static $name = "TicketMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.TicketMetadata, ALF.Shared.Dto"

    ticketId: TicketMetadataId;
    validUntil: Date;
    ticket?: string;

    constructor(data?: Partial<TicketMetadata>) {
        Object.assign(this, data);
    }
}
