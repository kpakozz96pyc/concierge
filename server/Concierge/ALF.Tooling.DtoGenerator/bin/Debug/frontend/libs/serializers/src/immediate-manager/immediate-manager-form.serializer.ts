import { ImmediateManagerContactInformationSerializer } from "./immediate-manager-contact-information.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { ImmediateManagerForm } from "@alf/models/immediate-manager/immediate-manager-form";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImmediateManagerFormSerializer implements Serializer<ImmediateManagerForm> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ImmediateManagerForm
    deserialize(data: any): ImmediateManagerForm | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.referenceDate = new Date(copy.referenceDate);

        copy.createdAt = new Date(copy.createdAt);

        copy.immediateManagerContactInformation = new ImmediateManagerContactInformationSerializer().deserialize(copy.immediateManagerContactInformation);

        if (copy.sentAt !== undefined)
            copy.sentAt = new Date(copy.sentAt);

        return new ImmediateManagerForm(copy);
    }

    serialize(entity: ImmediateManagerForm | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ImmediateManagerForm, _forceTypeHint?: boolean): any
    serialize(entity: ImmediateManagerForm | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: entity.$type,
            id: entity.id,
            referenceDate: serializeDate(entity.referenceDate),
            messageId: entity.messageId,
            companyId: entity.companyId,
            isActive: entity.isActive,
            isProcessing: entity.isProcessing,
            hasError: entity.hasError,
            isManuallyCreated: entity.isManuallyCreated,
            createdAt: entity.createdAt
                ? entity.createdAt.toISOString()
                : undefined,
            createdByUserId: entity.createdByUserId,
            mode: entity.mode,
            employeeIdOptions: entity.employeeIdOptions,
            employmentIdOptions: entity.employmentIdOptions,
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
