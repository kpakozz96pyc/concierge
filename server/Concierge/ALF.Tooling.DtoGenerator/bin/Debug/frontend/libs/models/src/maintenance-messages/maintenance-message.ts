

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type MaintenanceMessageId = string;

export class MaintenanceMessage {

    static $name = "MaintenanceMessage";
    static typeNameHint = "ALF.Shared.Dto.Models.MaintenanceMessages.MaintenanceMessage, ALF.Shared.Dto"

    id: MaintenanceMessageId;
    title: string;
    body?: string;
    published: Date;
    endPublished?: Date;

    constructor(data?: Partial<MaintenanceMessage>) {
        Object.assign(this, data);
    }
}
