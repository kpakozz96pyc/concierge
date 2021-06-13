

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ImportDefinitionColumn {

    static $name = "ImportDefinitionColumn";
    static typeNameHint = "ALF.Shared.Dto.Models.Import.ImportDefinitionColumn, ALF.Shared.Dto"

    $type: string;
    fieldId?: string;
    companyId?: string;
    tableNumber: number;
    fieldNumber: number;
    rank: number;
    reference?: string;
    value?: string;
    useFixedValue: boolean;
    replacementId?: string;
    required: boolean;
    dicLayout: boolean;
    dataType: number;
    numberOfDecimals: number;
    validation: boolean;
    concatenate: boolean;
    groupName?: string;
    showActualDate: boolean;
    adjustForPositionPercent: boolean;
    cobolRule?: string;
    fieldMappingReference?: string;

    constructor(data?: Partial<ImportDefinitionColumn>) {
        Object.assign(this, data);
    }
}
