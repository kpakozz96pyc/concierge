
import { TextCodeDataType } from "./enums/text-code-data-type";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type TextCodeId = string;

export class TextCode {

    static $name = "TextCode";
    static typeNameHint = "ALF.Shared.Dto.Models.Core.TextCode, ALF.Shared.Dto"

    id: TextCodeId;
    companyId: string;
    type: string;
    typeName: string;
    code: any;
    dataType: TextCodeDataType;
    fieldLength: number;
    deleteStatus: number;
    validFrom?: Date;
    validTo?: Date;
    cleared: boolean;
    description?: string;

    constructor(data?: Partial<TextCode>) {
        Object.assign(this, data);
    }
}
