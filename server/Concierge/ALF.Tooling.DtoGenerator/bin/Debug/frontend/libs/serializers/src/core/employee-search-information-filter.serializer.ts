import { Serializer } from "@alf/core/models";
import { EmployeeSearchInformationFilter } from "@alf/models/core/employee-search-information-filter";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeSearchInformationFilterSerializer implements Serializer<EmployeeSearchInformationFilter> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeSearchInformationFilter
    deserialize(data: any): EmployeeSearchInformationFilter | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeeSearchInformationFilter(copy);
    }

    serialize(entity: EmployeeSearchInformationFilter | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeSearchInformationFilter, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeSearchInformationFilter | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeSearchInformationFilter.typeNameHint : undefined,
            includePastEmployees: entity.includePastEmployees,
            crossCompanySearch: entity.crossCompanySearch,
            search: entity.search
        };
    }
}
