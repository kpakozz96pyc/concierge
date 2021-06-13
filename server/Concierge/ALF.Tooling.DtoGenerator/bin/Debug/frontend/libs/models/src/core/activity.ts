

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type ActivityId = string;

export class Activity {

    static $name = "Activity";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.Activity, ALF.Shared.Dto"

    id: ActivityId;
    companyId: string;
    activityCode: string;
    description?: string;
    isChargeable: boolean;
    projectManagerEmployeeNumber?: number;
    siteManagerEmployeeNumber?: number;
    approverEmployeeNumber?: number;
    validFrom?: Date;
    validTo?: Date;
    overrideHolidayStep?: number;
    overrideZoneFeeCode?: string;
    overrideMunicipalityNumber?: number;
    accountCode?: string;
    account?: any;
    accountDimensionA?: any;
    accountDimensionB?: any;
    accountDimensionC?: any;
    accountDimensionD?: any;
    projectDimension1?: any;
    projectDimension2?: any;
    projectDimension3?: any;
    projectDimension4?: any;
    projectDimension5?: any;
    projectDimension6Amount?: any;
    projectDimension6Hour?: any;

    constructor(data?: Partial<Activity>) {
        Object.assign(this, data);
    }
}
