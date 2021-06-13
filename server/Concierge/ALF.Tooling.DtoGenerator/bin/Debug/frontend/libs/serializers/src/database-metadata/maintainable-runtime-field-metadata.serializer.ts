import { StaticFieldDataType } from "@alf/models/database-metadata/enums/static-field-data-type";
import { LoggingType } from "@alf/models/database-metadata/enums/logging-type";
import { RuntimeFieldDataType } from "@alf/models/database-metadata/enums/runtime-field-data-type";
import { GDPRFieldCategorySerializer } from "./gdprfield-category.serializer";
import { Serializer } from "@alf/core/models";
import { MaintainableRuntimeFieldMetadata } from "@alf/models/database-metadata/maintainable-runtime-field-metadata";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class MaintainableRuntimeFieldMetadataSerializer implements Serializer<MaintainableRuntimeFieldMetadata> {

    deserialize(data: undefined): undefined
    deserialize(data: any): MaintainableRuntimeFieldMetadata
    deserialize(data: any): MaintainableRuntimeFieldMetadata | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };
        copy.staticDataType = StaticFieldDataType[copy.staticDataType];

        copy.systemGDPRCategories = (copy.systemGDPRCategories || []).map(new GDPRFieldCategorySerializer().deserialize);

        copy.loggingType = LoggingType[copy.loggingType];

        copy.dataType = RuntimeFieldDataType[copy.dataType];

        copy.gdprCategories = (copy.gdprCategories || []).map(new GDPRFieldCategorySerializer().deserialize);

        return new MaintainableRuntimeFieldMetadata(copy);
    }

    serialize(entity: MaintainableRuntimeFieldMetadata | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: MaintainableRuntimeFieldMetadata, _forceTypeHint?: boolean): any
    serialize(entity: MaintainableRuntimeFieldMetadata | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? MaintainableRuntimeFieldMetadata.typeNameHint : undefined,
            id: entity.id,
            companyId: entity.companyId,
            table: entity.table,
            fieldNumber: entity.fieldNumber,
            fieldName: entity.fieldName,
            hasRuntimeFieldMetadata: entity.hasRuntimeFieldMetadata,
            staticDataType: StaticFieldDataType[entity.staticDataType],
            staticTotalLength: entity.staticTotalLength,
            staticNumberOfIntegers: entity.staticNumberOfIntegers,
            staticNumberOfDecimals: entity.staticNumberOfDecimals,
            hasGDPRSystemDefinition: entity.hasGDPRSystemDefinition,
            systemGDPRPersonCategory: entity.systemGDPRPersonCategory,
            systemGDPRIdentifyingLevel: entity.systemGDPRIdentifyingLevel,
            systemGDPRReason: entity.systemGDPRReason,
            systemGDPRIsProductReason: entity.systemGDPRIsProductReason,
            systemGDPRIsLegalReason: entity.systemGDPRIsLegalReason,
            systemGDPRCategories: entity.systemGDPRCategories
                ? entity.systemGDPRCategories.map(e => new GDPRFieldCategorySerializer().serialize(e, _forceTypeHint))
                : undefined,
            hasLockLevelLabel: entity.hasLockLevelLabel,
            hasLockLevelLogicalDefinition: entity.hasLockLevelLogicalDefinition,
            hasLockLevelLookup: entity.hasLockLevelLookup,
            hasLockLevelMaster: entity.hasLockLevelMaster,
            displayName: entity.displayName,
            loggingType: LoggingType[entity.loggingType],
            isLoggingForRetroPay: entity.isLoggingForRetroPay,
            isMaster: entity.isMaster,
            masterFieldId: entity.masterFieldId,
            overrideStaticDataFormat: entity.overrideStaticDataFormat,
            dataType: RuntimeFieldDataType[entity.dataType],
            totalLength: entity.totalLength,
            integerPlaces: entity.integerPlaces,
            decimalPlaces: entity.decimalPlaces,
            hasLookup: entity.hasLookup,
            lookupCode: entity.lookupCode,
            validation: entity.validation,
            hasOverriddenGDPRPersonCategory: entity.hasOverriddenGDPRPersonCategory,
            hasOverriddenGDPRIdentifyingLevel: entity.hasOverriddenGDPRIdentifyingLevel,
            hasOverriddenGDPRReason: entity.hasOverriddenGDPRReason,
            gdprPersonCategory: entity.gdprPersonCategory,
            gdprIdentifyingLevel: entity.gdprIdentifyingLevel,
            gdprReason: entity.gdprReason,
            gdprIsLegalReason: entity.gdprIsLegalReason,
            gdprIsCustomerReason: entity.gdprIsCustomerReason,
            gdprCategories: entity.gdprCategories
                ? entity.gdprCategories.map(e => new GDPRFieldCategorySerializer().serialize(e, _forceTypeHint))
                : undefined
        };
    }
}
