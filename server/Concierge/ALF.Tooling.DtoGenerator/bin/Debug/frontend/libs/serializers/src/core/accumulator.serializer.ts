import { Serializer } from "@alf/core/models";
import { Accumulator } from "@alf/models/core/accumulator";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class AccumulatorSerializer implements Serializer<Accumulator> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Accumulator
    deserialize(data: any): Accumulator | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new Accumulator(copy);
    }

    serialize(entity: Accumulator | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Accumulator, _forceTypeHint?: boolean): any
    serialize(entity: Accumulator | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Accumulator.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            employeeNumber: entity.employeeNumber,
            periodNumber: entity.periodNumber,
            employeeId: entity.employeeId,
            periodId: entity.periodId,
            vacationPayReceivable: entity.vacationPayReceivable,
            vacationPayReceivableAdditionalWeek: entity.vacationPayReceivableAdditionalWeek,
            vacationDaysReceivableExtr: entity.vacationDaysReceivableExtr,
            vacationPayBasis1: entity.vacationPayBasis1,
            vacationPayBasis2: entity.vacationPayBasis2,
            vacationPayBasis3: entity.vacationPayBasis3,
            vacationPayBasisAdditionalWeek: entity.vacationPayBasisAdditionalWeek,
            vacationProvisionBasis1: entity.vacationProvisionBasis1,
            vacationProvisionBasis2: entity.vacationProvisionBasis2,
            vacationProvisionBasis3: entity.vacationProvisionBasis3,
            vacationProvisionBasisAdditionalWeek: entity.vacationProvisionBasisAdditionalWeek,
            vacationDaysLastYear: entity.vacationDaysLastYear,
            vacationDaysCurrentYear: entity.vacationDaysCurrentYear,
            vacationDaysNextYear: entity.vacationDaysNextYear,
            vacationDaysAccumulatedCurrentYear: entity.vacationDaysAccumulatedCurrentYear,
            advanceSalary: entity.advanceSalary,
            rounding: entity.rounding,
            negativeNetSalary: entity.negativeNetSalary,
            grossSalary: entity.grossSalary,
            netSalaryPeriod: entity.netSalaryPeriod,
            taxDeduction: entity.taxDeduction,
            forcedSalaryDeduction: entity.forcedSalaryDeduction,
            companyCarKilometers: entity.companyCarKilometers,
            specialCompanyCarKilometers: entity.specialCompanyCarKilometers,
            unionDeduction: entity.unionDeduction,
            electronicCommunication: entity.electronicCommunication,
            usedTaxFreeAmount: entity.usedTaxFreeAmount,
            taxFreeAmount: entity.taxFreeAmount,
            workHours: entity.workHours,
            accordHours: entity.accordHours,
            overtimeHours: entity.overtimeHours,
            userDefined1: entity.userDefined1,
            userDefined2: entity.userDefined2,
            userDefined3: entity.userDefined3,
            userDefined4: entity.userDefined4,
            userDefined5: entity.userDefined5,
            userDefined6: entity.userDefined6,
            userDefined7: entity.userDefined7,
            userDefined8: entity.userDefined8,
            userDefined9: entity.userDefined9,
            userDefined10: entity.userDefined10,
            userDefined11: entity.userDefined11,
            userDefined12: entity.userDefined12,
            userDefined13: entity.userDefined13,
            userDefined14: entity.userDefined14,
            userDefined15: entity.userDefined15,
            userDefined16: entity.userDefined16,
            userDefined17: entity.userDefined17,
            userDefined18: entity.userDefined18,
            userDefined19: entity.userDefined19,
            userDefined20: entity.userDefined20,
            userDefined21: entity.userDefined21,
            userDefined22: entity.userDefined22,
            userDefined23: entity.userDefined23,
            userDefined24: entity.userDefined24,
            userDefined25: entity.userDefined25,
            userDefined26: entity.userDefined26,
            userDefined27: entity.userDefined27,
            userDefined28: entity.userDefined28,
            userDefined29: entity.userDefined29,
            userDefined30: entity.userDefined30
        };
    }
}
