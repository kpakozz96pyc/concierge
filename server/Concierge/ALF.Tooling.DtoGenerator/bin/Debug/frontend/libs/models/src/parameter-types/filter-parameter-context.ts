

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type FilterParameterContextId = string;

export class FilterParameterContext {

    static $name = "FilterParameterContext";
    static typeNameHint = "ALF.Shared.Dto.Models.InputParameters.ParameterTypes.FilterParameterContext, ALF.Shared.Dto"

    id: FilterParameterContextId;
    tableNumbers: any[] = [];

    constructor(data?: Partial<FilterParameterContext>) {
        Object.assign(this, data);
    }
}
