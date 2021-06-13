
import { Employee } from "../core/employee";
import { Employment } from "../core/employment";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class NewEmployee {

    static $name = "NewEmployee";
    static typeNameHint = "ALF.Shared.Dto.Models.Persons.NewEmployee, ALF.Shared.Dto"

    employee: Employee;
    employment: Employment;

    constructor(data?: Partial<NewEmployee>) {
        Object.assign(this, data);
    }
}
