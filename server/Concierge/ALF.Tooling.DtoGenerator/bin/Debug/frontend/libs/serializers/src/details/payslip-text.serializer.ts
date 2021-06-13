import { Serializer } from "@alf/core/models";
import { PayslipText } from "@alf/models/details/payslip-text";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayslipTextSerializer implements Serializer<PayslipText> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayslipText
    deserialize(data: any): PayslipText | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PayslipText(copy);
    }

    serialize(entity: PayslipText | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayslipText, _forceTypeHint?: boolean): any
    serialize(entity: PayslipText | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayslipText.typeNameHint : undefined,
            textForSlipLine: entity.textForSlipLine,
            textLineSequenceNumber: entity.textLineSequenceNumber,
            slipText: entity.slipText
        };
    }
}
