
import { TextCodeDataType } from "./enums/text-code-data-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TextCodeTypeId = string;

export class TextCodeType {

    static $name = "TextCodeType";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.TextCodeType, ALF.Shared.Dto"

    id: TextCodeTypeId;
    companyId: string;
    type: string;
    description?: string;
    dataType: TextCodeDataType;
    fieldLength: number;

    constructor(data?: Partial<TextCodeType>) {
        Object.assign(this, data);
    }
}
