
import { StackType } from "./enums/stack-type";
import { AmeldingRootId } from "./amelding-root";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AmeldingStackId = string;

export class AmeldingStack {

    static $name = "AmeldingStack";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AmeldingStack, ALF.Shared.Dto"

    id: AmeldingStackId;
    stackType: StackType;
    ameldings: AmeldingRootId[] = [];

    constructor(data?: Partial<AmeldingStack>) {
        Object.assign(this, data);
    }
}
