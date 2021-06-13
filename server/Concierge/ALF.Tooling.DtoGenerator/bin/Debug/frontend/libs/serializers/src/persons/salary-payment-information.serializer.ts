import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { SalaryPaymentInformation } from "@alf/models/persons/salary-payment-information";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class SalaryPaymentInformationSerializer implements Serializer<SalaryPaymentInformation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): SalaryPaymentInformation
    deserialize(data: any): SalaryPaymentInformation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.payDate !== undefined)
            copy.payDate = new Date(copy.payDate);

        return new SalaryPaymentInformation(copy);
    }

    serialize(entity: SalaryPaymentInformation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: SalaryPaymentInformation, _forceTypeHint?: boolean): any
    serialize(entity: SalaryPaymentInformation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? SalaryPaymentInformation.typeNameHint : undefined,
            id: entity.id,
            employeeId: entity.employeeId,
            periodId: entity.periodId,
            netAmount: entity.netAmount,
            paySlipId: entity.paySlipId,
            payDate: serializeDate(entity.payDate)
        };
    }
}
