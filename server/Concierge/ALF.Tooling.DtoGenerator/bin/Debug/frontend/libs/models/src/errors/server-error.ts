

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ServerError {

    static $name = "ServerError";
    static typeNameHint = "ALF.Shared.Dto.Models.Errors.ServerError, ALF.Shared.Dto"

    id: string;
    message: string;
    detailedMessage?: string;
    stackTrace?: string;

    constructor(data?: Partial<ServerError>) {
        Object.assign(this, data);
    }
}
