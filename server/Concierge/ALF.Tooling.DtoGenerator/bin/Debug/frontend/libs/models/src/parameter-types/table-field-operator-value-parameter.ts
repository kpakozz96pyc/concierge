
import { InputParameterValue } from "@alf/models/parameter-types/input-parameter-value";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TableFieldOperatorValueParameter extends InputParameterValue {

    static $name = "TableFieldOperatorValueParameter";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.TableFieldOperatorValueParameter, ALF.Shared.Dto"

    tableNumber?: number;
    fieldNumber?: number;
    operator?: string;
    value?: any;
    overriddenValue?: any;

    constructor(data?: Partial<TableFieldOperatorValueParameter>) {
        super(data);
        Object.assign(this, data);
        this.$type = TableFieldOperatorValueParameter.typeNameHint;
    }
}
