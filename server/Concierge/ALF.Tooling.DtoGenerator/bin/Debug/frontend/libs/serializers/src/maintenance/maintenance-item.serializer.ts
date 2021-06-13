import { MaintenanceType } from "@alf/models/maintenance/enums/maintenance-type";
import { Serializer } from "@alf/core/models";
import { MaintenanceItem } from "@alf/models/maintenance/maintenance-item";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MaintenanceItemSerializer implements Serializer<MaintenanceItem> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MaintenanceItem
    deserialize(data: any): MaintenanceItem | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.type = MaintenanceType[copy.type];

        return new MaintenanceItem(copy);
    }

    serialize(entity: MaintenanceItem | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MaintenanceItem, _forceTypeHint?: boolean): any
    serialize(entity: MaintenanceItem | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? MaintenanceItem.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            name: entity.name,
            type: MaintenanceType[entity.type],
            typeCode: entity.typeCode,
            featureId: entity.featureId,
            tags: entity.tags
        };
    }
}
