import { GrantPopulationSerializer } from "./grant-population.serializer";
import { GrantExtraFieldSerializer } from "./grant-extra-field.serializer";
import { Serializer } from "@alf/core/models";
import { Grant } from "@alf/models/data-access/grant";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class GrantSerializer implements Serializer<Grant> {

    deserialize(data: undefined): undefined
    deserialize(data: any): Grant
    deserialize(data: any): Grant | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.populations = (copy.populations || []).map(new GrantPopulationSerializer().deserialize);

        copy.grantExtraFields = (copy.grantExtraFields || []).map(new GrantExtraFieldSerializer().deserialize);

        return new Grant(copy);
    }

    serialize(entity: Grant | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: Grant, _forceTypeHint?: boolean): any
    serialize(entity: Grant | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? Grant.typeNameHint : undefined,
            id: entity.id,
            targetType: entity.targetType,
            targetRoleId: entity.targetRoleId,
            targetGrantGroupId: entity.targetGrantGroupId,
            isSystemShipped: entity.isSystemShipped,
            grantType: entity.grantType,
            grantProcessId: entity.grantProcessId,
            grantReportProcessId: entity.grantReportProcessId,
            grantGrantGroupId: entity.grantGrantGroupId,
            requiredRoleId: entity.requiredRoleId,
            populations: entity.populations
                ? entity.populations.map(e => new GrantPopulationSerializer().serialize(e, _forceTypeHint))
                : undefined,
            grantExtraFields: entity.grantExtraFields
                ? entity.grantExtraFields.map(e => new GrantExtraFieldSerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
