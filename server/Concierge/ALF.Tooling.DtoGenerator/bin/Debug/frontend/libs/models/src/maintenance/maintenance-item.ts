
import { MaintenanceType } from "./enums/maintenance-type";
import { FeatureId } from "../feature/enums/feature-id";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type MaintenanceItemId = string;

export class MaintenanceItem {

    static $name = "MaintenanceItem";
    static typeNameHint = "ALF.Shared.Dto.Models.Maintenance.MaintenanceItem, ALF.Shared.Dto"

    id: MaintenanceItemId;
    companyId: string;
    name: string;
    type: MaintenanceType;
    typeCode?: string;
    featureId?: FeatureId;
    tags: string[] = [];

    constructor(data?: Partial<MaintenanceItem>) {
        Object.assign(this, data);
    }
}
