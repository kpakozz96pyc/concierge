

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AltinnPingResult {

    static $name = "AltinnPingResult";
    static typeNameHint = "ALF.Shared.Dto.Models.Altinn.RestApi.AltinnPingResult, ALF.Shared.Dto"

    success: boolean;
    url?: string;
    date: Date;
    errorMessage?: string;

    constructor(data?: Partial<AltinnPingResult>) {
        Object.assign(this, data);
    }
}
