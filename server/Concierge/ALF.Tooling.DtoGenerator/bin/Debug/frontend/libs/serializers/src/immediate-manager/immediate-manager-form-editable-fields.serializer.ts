import { ImmediateManagerContactInformationSerializer } from "./immediate-manager-contact-information.serializer";
import { ImmediateManagerFormSerializer } from "./immediate-manager-form.serializer";
import { ImmediateManagerForm } from "@alf/models/immediate-manager/immediate-manager-form";
import { Serializer } from "@alf/core/models";
import { ImmediateManagerFormEditableFields } from "@alf/models/immediate-manager/immediate-manager-form-editable-fields";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImmediateManagerFormEditableFieldsSerializer implements Serializer<ImmediateManagerFormEditableFields> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImmediateManagerFormEditableFields
    deserialize(data: any): ImmediateManagerFormEditableFields | undefined {
        if (!data) {
            return undefined;
        }

        if (data.$type === "ALF.Shared.Dto.Models.Absence.ImmediateManager.ImmediateManagerForm, ALF.Shared.Dto")
            return new ImmediateManagerFormSerializer().deserialize(data);

        const copy = { ...data };
        copy.immediateManagerContactInformation = new ImmediateManagerContactInformationSerializer().deserialize(copy.immediateManagerContactInformation);

        if (copy.sentAt !== undefined)
            copy.sentAt = new Date(copy.sentAt);

        return new ImmediateManagerFormEditableFields(copy);
    }

    serialize(entity: ImmediateManagerFormEditableFields | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImmediateManagerFormEditableFields, _forceTypeHint?: boolean): any
    serialize(entity: ImmediateManagerFormEditableFields | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        if (entity.$type === "ALF.Shared.Dto.Models.Absence.ImmediateManager.ImmediateManagerForm, ALF.Shared.Dto")
            return new ImmediateManagerFormSerializer().serialize(entity as ImmediateManagerForm, _forceTypeHint);

        return {
            $type: _forceTypeHint ? ImmediateManagerFormEditableFields.typeNameHint : undefined,
            status: entity.status,
            isAbandoned: entity.isAbandoned,
            parseError: entity.parseError,
            resolveEmploymentError: entity.resolveEmploymentError,
            fillError: entity.fillError,
            shouldBeAutofilled: entity.shouldBeAutofilled,
            waitingForJobId: entity.waitingForJobId,
            errorId: entity.errorId,
            errorMessage: entity.errorMessage,
            employeeId: entity.employeeId,
            employmentId: entity.employmentId,
            organizationCode: entity.organizationCode,
            hendelseId: entity.hendelseId,
            organisasjonsnummer: entity.organisasjonsnummer,
            sykmeldtNavn: entity.sykmeldtNavn,
            sykmeldtFoedselsnummer: entity.sykmeldtFoedselsnummer,
            immediateManagerContactInformation: new ImmediateManagerContactInformationSerializer().serialize(entity.immediateManagerContactInformation, _forceTypeHint),
            utbetalesLonn: entity.utbetalesLonn,
            sentAt: entity.sentAt
                ? entity.sentAt.toISOString()
                : undefined,
            archivedMessageId: entity.archivedMessageId,
            archiveReference: entity.archiveReference
        };
    }
}
