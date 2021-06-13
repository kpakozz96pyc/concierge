import { Serializer } from "@alf/core/models";
import { PeriodNameTemplateValidity } from "@alf/models/planning/period-name-template-validity";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class PeriodNameTemplateValiditySerializer implements Serializer<PeriodNameTemplateValidity> {

    deserialize(data: undefined): undefined
    deserialize(data: any): PeriodNameTemplateValidity
    deserialize(data: any): PeriodNameTemplateValidity | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new PeriodNameTemplateValidity(copy);
    }

    serialize(entity: PeriodNameTemplateValidity | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: PeriodNameTemplateValidity, _forceTypeHint?: boolean): any
    serialize(entity: PeriodNameTemplateValidity | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? PeriodNameTemplateValidity.typeNameHint : undefined,
            isValid: entity.isValid,
            errorMessage: entity.errorMessage
        };
    }
}
