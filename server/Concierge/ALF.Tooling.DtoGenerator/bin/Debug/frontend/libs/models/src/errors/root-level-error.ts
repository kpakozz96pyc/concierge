
import { AmeldingErrorSeverity } from "../amelding/enums/amelding-error-severity";
import { InternalEntity } from "../amelding/enums/internal-entity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class RootLevelError {

    static $name = "RootLevelError";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.Errors.RootLevelError, ALF.Shared.Dto"

    $type: string;
    id: string;
    ameldingId?: string;
    errorId: string;
    title?: string;
    message?: string;
    isIgnored: boolean;
    severity: AmeldingErrorSeverity;
    altinnEntity?: string;
    internalEntity: InternalEntity;

    constructor(data?: Partial<RootLevelError>) {
        Object.assign(this, data);
    }
}
