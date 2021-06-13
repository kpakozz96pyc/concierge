import { SickNotePeriodSerializer } from "./sick-note-period.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SickNote } from "@alf/models/sick-notes/sick-note";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SickNoteSerializer implements Serializer<SickNote> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SickNote
    deserialize(data: any): SickNote | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.createdAt = new Date(copy.createdAt);

        copy.changedAt = new Date(copy.changedAt);

        if (copy.mottattTidspunkt !== undefined)
            copy.mottattTidspunkt = new Date(copy.mottattTidspunkt);

        if (copy.syketilfelleFom !== undefined)
            copy.syketilfelleFom = new Date(copy.syketilfelleFom);

        if (copy.arbeidFom !== undefined)
            copy.arbeidFom = new Date(copy.arbeidFom);

        if (copy.behandlet !== undefined)
            copy.behandlet = new Date(copy.behandlet);

        copy.periods = (copy.periods || []).map(new SickNotePeriodSerializer().deserialize);

        return new SickNote(copy);
    }

    serialize(entity: SickNote | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SickNote, _forceTypeHint?: boolean): any
    serialize(entity: SickNote | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            id: entity.id,
            messageId: entity.messageId,
            companyId: entity.companyId,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            createdByUserId: entity.createdByUserId,
            createdByUsername: entity.createdByUsername,
            changedAt: entity.changedAt
                ? entity.changedAt.toISOString()
                : undefined,
            mode: entity.mode,
            isActive: entity.isActive,
            isProcessing: entity.isProcessing,
            hasError: entity.hasError,
            navId: entity.navId,
            status: entity.status,
            isAbandoned: entity.isAbandoned,
            resolveEmployeeError: entity.resolveEmployeeError,
            absenceCaseCreationError: entity.absenceCaseCreationError,
            absenceCaseCreationErrorId: entity.absenceCaseCreationErrorId,
            absenceCaseCreationErrorMessage: entity.absenceCaseCreationErrorMessage,
            absenceCaseId: entity.absenceCaseId,
            errorId: entity.errorId,
            errorMessage: entity.errorMessage,
            waitingForJobId: entity.waitingForJobId,
            employeeId: entity.employeeId,
            foedselsnummer: entity.foedselsnummer,
            virksomhetsnummer: entity.virksomhetsnummer,
            mottattTidspunkt: entity.mottattTidspunkt
                ? entity.mottattTidspunkt.toISOString()
                : undefined,
            syketilfelleFom: serializeDate(entity.syketilfelleFom),
            navn: entity.navn,
            erArbeidsfoerEtterEndtPeriode: entity.erArbeidsfoerEtterEndtPeriode,
            beskrivHensynArbeidsplassen: entity.beskrivHensynArbeidsplassen,
            harEgetArbeidPaaSikt: entity.harEgetArbeidPaaSikt,
            arbeidFom: serializeDate(entity.arbeidFom),
            harAnnetArbeidPaaSikt: entity.harAnnetArbeidPaaSikt,
            tiltakArbeidsplassen: entity.tiltakArbeidsplassen,
            meldingTilArbeidsgiver: entity.meldingTilArbeidsgiver,
            behandlet: serializeDate(entity.behandlet),
            behandlerNavn: entity.behandlerNavn,
            behandlerTlfNummer: entity.behandlerTlfNummer,
            periods: entity.periods
                ? entity.periods.map(e => new SickNotePeriodSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
