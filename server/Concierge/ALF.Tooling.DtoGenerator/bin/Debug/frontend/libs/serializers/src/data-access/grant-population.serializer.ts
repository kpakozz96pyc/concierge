import { Serializer } from "@alf/core/models";
import { GrantPopulation } from "@alf/models/data-access/grant-population";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GrantPopulationSerializer implements Serializer<GrantPopulation> {

    deserialize(data: undefined): undefined
    deserialize(data: any): GrantPopulation
    deserialize(data: any): GrantPopulation | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new GrantPopulation(copy);
    }

    serialize(entity: GrantPopulation | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: GrantPopulation, _forceTypeHint?: boolean): any
    serialize(entity: GrantPopulation | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? GrantPopulation.typeNameHint : undefined,
            grantId: entity.grantId,
            targetType: entity.targetType,
            targetRoleId: entity.targetRoleId,
            targetGrantGroupId: entity.targetGrantGroupId,
            populationType: entity.populationType,
            populationId: entity.populationId,
            isSystemShipped: entity.isSystemShipped
        };
    }
}
