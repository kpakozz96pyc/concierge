

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RunnerState {

    static $name = "RunnerState";
    static typeNameHint = "ALF.Shared.Dto.Models.Yggdrasil.RunnerState, ALF.Shared.Dto"

    type?: string;
    startTimeUtc: Date;
    lastActivityTime: Date;
    online: boolean;

    constructor(data?: Partial<RunnerState>) {
        Object.assign(this, data);
    }
}
