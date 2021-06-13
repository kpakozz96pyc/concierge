

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ReportDefinitionDetails {

    static $name = "ReportDefinitionDetails";
    static typeNameHint = "ALF.Shared.Dto.Models.Reports.ReportDefinitionDetails, ALF.Shared.Dto"

    id: string;
    companyId: string;
    serialNumber: number;
    tableNumber: number;
    fieldNumber: number;
    dataType: number;
    fieldLength: number;
    numberOfDecimals: number;
    heading: string;
    filterRule: string;
    sortOrder: number;
    breakOnNewGroup: boolean;
    pageBreakOnNewGroup: boolean;
    summary: boolean;
    leadingNull: boolean;
    simplifiedSelection: boolean;
    hiddenField: boolean;
    blankNULLValues: boolean;
    lookup: boolean;
    lookupLength: number;
    lookupHeading?: string;
    isTimelineField: boolean;

    constructor(data?: Partial<ReportDefinitionDetails>) {
        Object.assign(this, data);
    }
}
