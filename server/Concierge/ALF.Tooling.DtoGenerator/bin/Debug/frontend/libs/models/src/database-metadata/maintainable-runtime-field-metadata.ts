
import { StaticFieldDataType } from "./enums/static-field-data-type";
import { GDPRPersonCategory } from "./enums/gdprperson-category";
import { LoggingType } from "./enums/logging-type";
import { RuntimeFieldDataType } from "./enums/runtime-field-data-type";
import { GDPRIdentifyingLevel } from "./enums/gdpridentifying-level";
import { GDPRFieldCategory } from "./gdprfield-category";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type MaintainableRuntimeFieldMetadataId = string;

export class MaintainableRuntimeFieldMetadata {

    static $name = "MaintainableRuntimeFieldMetadata";
    static typeNameHint = "ALF.Shared.Dto.Models.DatabaseMetadata.MaintainableRuntimeFieldMetadata, ALF.Shared.Dto"

    id: MaintainableRuntimeFieldMetadataId;
    companyId?: string;
    table: number;
    fieldNumber: number;
    fieldName?: string;
    hasRuntimeFieldMetadata: boolean;
    staticDataType: StaticFieldDataType;
    staticTotalLength: number;
    staticNumberOfIntegers: number;
    staticNumberOfDecimals: number;
    hasGDPRSystemDefinition: boolean;
    systemGDPRPersonCategory: GDPRPersonCategory;
    systemGDPRIdentifyingLevel?: GDPRIdentifyingLevel;
    systemGDPRReason?: string;
    systemGDPRIsProductReason: boolean;
    systemGDPRIsLegalReason: boolean;
    systemGDPRCategories: GDPRFieldCategory[] = [];
    hasLockLevelLabel: boolean;
    hasLockLevelLogicalDefinition: boolean;
    hasLockLevelLookup: boolean;
    hasLockLevelMaster: boolean;
    displayName?: string;
    loggingType: LoggingType;
    isLoggingForRetroPay: boolean;
    isMaster: boolean;
    masterFieldId?: string;
    overrideStaticDataFormat: boolean;
    dataType: RuntimeFieldDataType;
    totalLength: number;
    integerPlaces?: number;
    decimalPlaces?: number;
    hasLookup: boolean;
    lookupCode?: string;
    validation?: string;
    hasOverriddenGDPRPersonCategory: boolean;
    hasOverriddenGDPRIdentifyingLevel: boolean;
    hasOverriddenGDPRReason: boolean;
    gdprPersonCategory?: GDPRPersonCategory;
    gdprIdentifyingLevel?: GDPRIdentifyingLevel;
    gdprReason?: string;
    gdprIsLegalReason?: boolean;
    gdprIsCustomerReason?: boolean;
    gdprCategories: GDPRFieldCategory[] = [];

    constructor(data?: Partial<MaintainableRuntimeFieldMetadata>) {
        Object.assign(this, data);
    }
}
