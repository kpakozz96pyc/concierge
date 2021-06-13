
import { SickNoteStatus } from "./enums/sick-note-status";
import { EmployeeResolveError } from "../absence/enums/employee-resolve-error";
import { SicknessBenefitAbsenceCaseCreationError } from "../absence-cases/enums/sickness-benefit-absence-case-creation-error";
import { SickNotePeriod } from "./sick-note-period";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SickNoteEditableFields {

    static $name = "SickNoteEditableFields";
    static typeNameHint = "ALF.Shared.Dto.Models.Absence.SickNotes.SickNoteEditableFields, ALF.Shared.Dto"

    $type: string;
    navId?: string;
    status: SickNoteStatus;
    isAbandoned: boolean;
    resolveEmployeeError?: EmployeeResolveError;
    absenceCaseCreationError?: SicknessBenefitAbsenceCaseCreationError;
    absenceCaseCreationErrorId?: string;
    absenceCaseCreationErrorMessage?: string;
    absenceCaseId?: any;
    errorId?: string;
    errorMessage?: string;
    waitingForJobId?: string;
    employeeId?: string;
    foedselsnummer?: string;
    virksomhetsnummer: number;
    mottattTidspunkt?: Date;
    syketilfelleFom?: Date;
    navn?: string;
    erArbeidsfoerEtterEndtPeriode?: boolean;
    beskrivHensynArbeidsplassen?: string;
    harEgetArbeidPaaSikt?: boolean;
    arbeidFom?: Date;
    harAnnetArbeidPaaSikt?: boolean;
    tiltakArbeidsplassen?: string;
    meldingTilArbeidsgiver?: string;
    behandlet?: Date;
    behandlerNavn?: string;
    behandlerTlfNummer?: string;
    periods: SickNotePeriod[] = [];

    constructor(data?: Partial<SickNoteEditableFields>) {
        Object.assign(this, data);
    }
}
