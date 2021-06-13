import { CompanyCarType } from "@alf/models/core/enums/company-car-type";
import { CompanyCarStatusType } from "@alf/models/core/enums/company-car-status-type";
import { serializeDate } from "@alf/core";
import { Serializer } from "@alf/core/models";
import { CompanyCar } from "@alf/models/core/company-car";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class CompanyCarSerializer implements Serializer<CompanyCar> {

    deserialize(data: undefined): undefined
    deserialize(data: any): CompanyCar
    deserialize(data: any): CompanyCar | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        if (copy.registrationDate !== undefined)
            copy.registrationDate = new Date(copy.registrationDate);

        copy.carType = CompanyCarType[copy.carType];

        if (copy.soldAtDate !== undefined)
            copy.soldAtDate = new Date(copy.soldAtDate);

        if (copy.insuranceDate !== undefined)
            copy.insuranceDate = new Date(copy.insuranceDate);

        copy.carStatus = CompanyCarStatusType[copy.carStatus];

        return new CompanyCar(copy);
    }

    serialize(entity: CompanyCar | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: CompanyCar, _forceTypeHint?: boolean): any
    serialize(entity: CompanyCar | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? CompanyCar.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            registrationCode: entity.registrationCode,
            carBrandName: entity.carBrandName,
            description: entity.description,
            registrationDate: serializeDate(entity.registrationDate),
            yearOfCarModel: entity.yearOfCarModel,
            price: entity.price,
            isElectric: entity.isElectric,
            carType: CompanyCarType[entity.carType],
            isPool: entity.isPool,
            soldAtDate: serializeDate(entity.soldAtDate),
            insuranceDate: serializeDate(entity.insuranceDate),
            insuranceDistance: entity.insuranceDistance,
            insuranceYearlyDistance: entity.insuranceYearlyDistance,
            insuranceDeductible: entity.insuranceDeductible,
            carOwner: entity.carOwner,
            insuranceCompany: entity.insuranceCompany,
            carStatus: CompanyCarStatusType[entity.carStatus]
        };
    }
}
