
import { ImmediateManagerFormStatus } from "./enums/immediate-manager-form-status";
import { AltinnParseError } from "../absence/enums/altinn-parse-error";
import { ResolveEmploymentError } from "../absence/enums/resolve-employment-error";
import { ImmediateManagerFormFillError } from "./enums/immediate-manager-form-fill-error";
import { ImmediateManagerContactInformation } from "./immediate-manager-contact-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImmediateManagerFormEditableFields {

    static $name = "ImmediateManagerFormEditableFields";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.ImmediateManager.ImmediateManagerFormEditableFields, ALF.Shared.Dto"

    $type: string;
    status: ImmediateManagerFormStatus;
    isAbandoned: boolean;
    parseError?: AltinnParseError;
    resolveEmploymentError?: ResolveEmploymentError;
    fillError?: ImmediateManagerFormFillError;
    shouldBeAutofilled: boolean;
    waitingForJobId?: string;
    errorId?: string;
    errorMessage?: string;
    employeeId?: string;
    employmentId?: string;
    organizationCode?: string;
    hendelseId?: string;
    organisasjonsnummer: number;
    sykmeldtNavn?: string;
    sykmeldtFoedselsnummer?: string;
    immediateManagerContactInformation?: ImmediateManagerContactInformation;
    utbetalesLonn?: boolean;
    sentAt?: Date;
    archivedMessageId?: any;
    archiveReference?: string;

    constructor(data?: Partial<ImmediateManagerFormEditableFields>) {
        Object.assign(this, data);
    }
}
