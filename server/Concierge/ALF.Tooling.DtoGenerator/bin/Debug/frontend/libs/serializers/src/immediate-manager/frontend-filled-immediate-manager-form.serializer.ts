import { ImmediateManagerContactInformationSerializer } from "./immediate-manager-contact-information.serializer";
import { Serializer } from "@alf/core/models";
import { FrontendFilledImmediateManagerForm } from "@alf/models/immediate-manager/frontend-filled-immediate-manager-form";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class FrontendFilledImmediateManagerFormSerializer implements Serializer<FrontendFilledImmediateManagerForm> {

    deserialize(data: undefined): undefined
    deserialize(data: any): FrontendFilledImmediateManagerForm
    deserialize(data: any): FrontendFilledImmediateManagerForm | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.immediateManagerContactInformation = new ImmediateManagerContactInformationSerializer().deserialize(copy.immediateManagerContactInformation);

        return new FrontendFilledImmediateManagerForm(copy);
    }

    serialize(entity: FrontendFilledImmediateManagerForm | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: FrontendFilledImmediateManagerForm, _forceTypeHint?: boolean): any
    serialize(entity: FrontendFilledImmediateManagerForm | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? FrontendFilledImmediateManagerForm.typeNameHint : undefined,
            employeeId: entity.employeeId,
            employmentId: entity.employmentId,
            immediateManagerContactInformation: new ImmediateManagerContactInformationSerializer().serialize(entity.immediateManagerContactInformation, _forceTypeHint),
            utbetalesLonn: entity.utbetalesLonn
        };
    }
}
