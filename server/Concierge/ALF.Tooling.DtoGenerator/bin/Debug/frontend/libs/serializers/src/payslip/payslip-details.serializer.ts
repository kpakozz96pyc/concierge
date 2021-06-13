import { PayslipReportInformationSerializer } from "./payslip-report-information.serializer";
import { AccumulatedValueSerializer } from "../details/accumulated-value.serializer";
import { BankPaymentSerializer } from "../details/bank-payment.serializer";
import { PaySlipLineSerializer } from "../details/pay-slip-line.serializer";
import { Serializer } from "@alf/core/models";
import { PayslipDetails } from "@alf/models/payslip/payslip-details";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayslipDetailsSerializer implements Serializer<PayslipDetails> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayslipDetails
    deserialize(data: any): PayslipDetails | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.reportInformation = new PayslipReportInformationSerializer().deserialize(copy.reportInformation);

        copy.accumulatedValues = (copy.accumulatedValues || []).map(new AccumulatedValueSerializer().deserialize);

        copy.bankPayments = (copy.bankPayments || []).map(new BankPaymentSerializer().deserialize);

        copy.paymentLines = (copy.paymentLines || []).map(new PaySlipLineSerializer().deserialize);

        return new PayslipDetails(copy);
    }

    serialize(entity: PayslipDetails | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayslipDetails, _forceTypeHint?: boolean): any
    serialize(entity: PayslipDetails | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayslipDetails.typeNameHint : undefined,
            id: entity.id,
            employeeId: entity.employeeId,
            periodId: entity.periodId,
            reportInformation: new PayslipReportInformationSerializer().serialize(entity.reportInformation, _forceTypeHint),
            accumulatedValues: entity.accumulatedValues
                ? entity.accumulatedValues.map(e => new AccumulatedValueSerializer().serialize(e, _forceTypeHint))
                : undefined,
            bankPayments: entity.bankPayments
                ? entity.bankPayments.map(e => new BankPaymentSerializer().serialize(e, _forceTypeHint))
                : undefined,
            paymentLines: entity.paymentLines
                ? entity.paymentLines.map(e => new PaySlipLineSerializer().serialize(e, _forceTypeHint))
                : undefined,
            texts: entity.texts
        };
    }
}
