

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDefinitionFieldExtendedInformation {

    static $name = "ReportDefinitionFieldExtendedInformation";
    static typeNameHint = "ALF.Shared.Dto.Models.AvailableValue.ExtendedInformation.ReportDefinitionFieldExtendedInformation, ALF.Shared.Dto"

    tableNumber: number;
    tableName?: string;
    dataType: number;
    decimalPlaces?: number;
    totalLength: number;
    displayName?: string;
    lookupName?: string;
    lookupLength?: number;
    isVirtualField: boolean;

    constructor(data?: Partial<ReportDefinitionFieldExtendedInformation>) {
        Object.assign(this, data);
    }
}
