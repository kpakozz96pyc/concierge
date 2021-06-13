import { Serializer } from "@alf/core/models";
import { ElectronicCommunication } from "@alf/models/core/electronic-communication";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ElectronicCommunicationSerializer implements Serializer<ElectronicCommunication> {

    deserialize(data: undefined): undefined
    deserialize(data: any): ElectronicCommunication
    deserialize(data: any): ElectronicCommunication | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new ElectronicCommunication(copy);
    }

    serialize(entity: ElectronicCommunication | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: ElectronicCommunication, _forceTypeHint?: boolean): any
    serialize(entity: ElectronicCommunication | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? ElectronicCommunication.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            schemeCode: entity.schemeCode,
            description: entity.description,
            companyCoversAmount: entity.companyCoversAmount,
            employeeCoversAmount: entity.employeeCoversAmount,
            payCodeIdConsumption: entity.payCodeIdConsumption,
            invoicesPerYear: entity.invoicesPerYear,
            shouldGenerateTax: entity.shouldGenerateTax
        };
    }
}
