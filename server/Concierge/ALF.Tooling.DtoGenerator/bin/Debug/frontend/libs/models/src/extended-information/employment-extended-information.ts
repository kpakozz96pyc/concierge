

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmploymentExtendedInformation {

    static $name = "EmploymentExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.EmploymentExtendedInformation, ALF.Shared.Dto"

    hiredDate?: Date;
    terminatedDate?: Date;
    positionPercent?: number;
    organizationCode?: string;
    isActive: boolean;
    isMainEmployment: boolean;
    isRelevant: boolean;
    dimensionA?: any;
    dimensionB?: any;
    dimensionC?: any;
    dimensionD?: any;
    projectDimension1?: any;
    projectDimension2?: any;
    projectDimension3?: any;
    projectDimension4?: any;
    projectDimension5?: any;
    projectDimension6Amount?: any;
    projectDimension6Hours?: any;
    activityCode?: string;

    constructor(data?: Partial<EmploymentExtendedInformation>) {
        Object.assign(this, data);
    }
}
