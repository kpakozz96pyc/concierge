import { ImmediateManagerContactInformationSerializer } from "./immediate-manager-contact-information.serializer";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { NewManualImmediateManagerForm } from "@alf/models/immediate-manager/new-manual-immediate-manager-form";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewManualImmediateManagerFormSerializer implements Serializer<NewManualImmediateManagerForm> {

    deserialize(data: undefined): undefined
    deserialize(data: any): NewManualImmediateManagerForm
    deserialize(data: any): NewManualImmediateManagerForm | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.referenceDate = new Date(copy.referenceDate);

        copy.immediateManagerContactInformation = new ImmediateManagerContactInformationSerializer().deserialize(copy.immediateManagerContactInformation);

        return new NewManualImmediateManagerForm(copy);
    }

    serialize(entity: NewManualImmediateManagerForm | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: NewManualImmediateManagerForm, _forceTypeHint?: boolean): any
    serialize(entity: NewManualImmediateManagerForm | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? NewManualImmediateManagerForm.typeNameHint : undefined,
            companyId: entity.companyId,
            employmentId: entity.employmentId,
            referenceDate: serializeDate(entity.referenceDate),
            shouldBeAutofilled: entity.shouldBeAutofilled,
            immediateManagerContactInformation: new ImmediateManagerContactInformationSerializer().serialize(entity.immediateManagerContactInformation, _forceTypeHint),
            utbetalesLonn: entity.utbetalesLonn
        };
    }
}
