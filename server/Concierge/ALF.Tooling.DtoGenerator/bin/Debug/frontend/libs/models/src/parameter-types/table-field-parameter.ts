
import { InputParameterValue } from "@alf/models/parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TableFieldParameter extends InputParameterValue {

    static $name = "TableFieldParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.TableFieldParameter, ALF.Shared.Dto"

    tableNumber?: number;
    value?: number;
    overriddenValue?: number;

    constructor(data?: Partial<TableFieldParameter>) {
        super(data);
        Object.assign(this, data);
        this.$type = TableFieldParameter.typeNameHint;
    }
}
