
import { RelativeDateFormula } from "@alf/models/relative-date/relative-date-formula";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class TestRelativeDateFormula extends RelativeDateFormula {

    static $name = "TestRelativeDateFormula";
    static typeNameHint = "ALF.Shared.Dto.Models.RelativeDate.TestRelativeDateFormula, ALF.Shared.Dto"

    testDate: Date;

    constructor(data?: Partial<TestRelativeDateFormula>) {
        super(data);
        Object.assign(this, data);
        this.$type = TestRelativeDateFormula.typeNameHint;
    }
}
