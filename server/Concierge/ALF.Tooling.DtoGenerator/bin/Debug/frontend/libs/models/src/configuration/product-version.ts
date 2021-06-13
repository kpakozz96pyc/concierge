

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class ProductVersion {

    static $name = "ProductVersion";
    static typeNameHint = "ALF.Shared.Dto.Models.Configuration.ProductVersion, ALF.Shared.Dto"

    id?: string;
    major: number;
    minor: number;
    build: number;
    fileVersion?: string;
    informationalVersion?: string;

    constructor(data?: Partial<ProductVersion>) {
        Object.assign(this, data);
    }
}
