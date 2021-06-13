import { Serializer } from "@alf/core/models";
import { StillingKode } from "@alf/models/core/stilling-kode";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class StillingKodeSerializer implements Serializer<StillingKode> {

    deserialize(data: undefined): undefined
    deserialize(data: any): StillingKode
    deserialize(data: any): StillingKode | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new StillingKode(copy);
    }

    serialize(entity: StillingKode | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: StillingKode, _forceTypeHint?: boolean): any
    serialize(entity: StillingKode | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? StillingKode.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            stillingKodeCode: entity.stillingKodeCode,
            description: entity.description,
            occupationalGroup: entity.occupationalGroup,
            positionCategory: entity.positionCategory,
            positionSeries: entity.positionSeries,
            salaryPlan: entity.salaryPlan,
            salaryPlanSeries: entity.salaryPlanSeries,
            refWageScale: entity.refWageScale,
            salaryGradeWageScale: entity.salaryGradeWageScale,
            pensionAge: entity.pensionAge,
            positionPercent: entity.positionPercent,
            paiOrganizationCode: entity.paiOrganizationCode,
            organizationCode: entity.organizationCode,
            navoProfessionalGroup: entity.navoProfessionalGroup
        };
    }
}
