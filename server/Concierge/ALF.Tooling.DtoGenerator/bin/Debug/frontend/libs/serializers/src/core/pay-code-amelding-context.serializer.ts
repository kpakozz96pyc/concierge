import { Serializer } from "@alf/core/models";
import { PayCodeAMeldingContext } from "@alf/models/core/pay-code-amelding-context";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PayCodeAMeldingContextSerializer implements Serializer<PayCodeAMeldingContext> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PayCodeAMeldingContext
    deserialize(data: any): PayCodeAMeldingContext | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PayCodeAMeldingContext(copy);
    }

    serialize(entity: PayCodeAMeldingContext | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PayCodeAMeldingContext, _forceTypeHint?: boolean): any
    serialize(entity: PayCodeAMeldingContext | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PayCodeAMeldingContext.typeNameHint : undefined,
            shouldReport: entity.shouldReport,
            includeEmployersFee: entity.includeEmployersFee,
            includeTax: entity.includeTax,
            reportTypeCode: entity.reportTypeCode,
            sailor24hOnBoardCode: entity.sailor24hOnBoardCode,
            overrideTaxRule: entity.overrideTaxRule,
            overrideDeduction: entity.overrideDeduction,
            incomeTypeCode: entity.incomeTypeCode,
            advantageCode: entity.advantageCode,
            descriptionCode: entity.descriptionCode,
            reportNumbersCode: entity.reportNumbersCode
        };
    }
}
