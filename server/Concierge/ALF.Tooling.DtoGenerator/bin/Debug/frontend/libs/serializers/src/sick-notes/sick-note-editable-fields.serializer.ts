import { SickNotePeriodSerializer } from "./sick-note-period.serializer";
import { SickNoteSerializer } from "./sick-note.serializer";
import { SickNote } from "@alf/models/sick-notes/sick-note";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SickNoteEditableFields } from "@alf/models/sick-notes/sick-note-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SickNoteEditableFieldsSerializer implements Serializer<SickNoteEditableFields> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SickNoteEditableFields
    deserialize(data: any): SickNoteEditableFields | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.SickNote, ALF.Shared.Dto")
            return new SickNoteSerializer().deserialize(data);

        const copy = { ...data };
        if (copy.mottattTidspunkt !== undefined)
            copy.mottattTidspunkt = new Date(copy.mottattTidspunkt);

        if (copy.syketilfelleFom !== undefined)
            copy.syketilfelleFom = new Date(copy.syketilfelleFom);

        if (copy.arbeidFom !== undefined)
            copy.arbeidFom = new Date(copy.arbeidFom);

        if (copy.behandlet !== undefined)
            copy.behandlet = new Date(copy.behandlet);

        copy.periods = (copy.periods || []).map(new SickNotePeriodSerializer().deserialize);

        return new SickNoteEditableFields(copy);
    }

    serialize(entity: SickNoteEditableFields | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SickNoteEditableFields, _forceTypeHint?: boolean): any
    serialize(entity: SickNoteEditableFields | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.SickNotes.SickNote, ALF.Shared.Dto")
            return new SickNoteSerializer().serialize(entity as SickNote, _forceTypeHint);

        return {
            $type: _forceTypeHint ? SickNoteEditableFields.typeNameHint : undefined,
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
