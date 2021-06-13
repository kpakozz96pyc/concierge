using ALF.Shared.Dto.Helpers.Lonn;
using System;

namespace ALF.Shared.Dto.Attributes
{
    public class SplitDateTimeOffsetAttribute : Attribute
    {
        public DatabaseTableEnum Table { get; set; }
        public int DatePartFieldNumber { get; set; }
        public int TimePartFieldNumber { get; set; }

        public SplitDateTimeOffsetAttribute(DatabaseTableEnum table, int datePartFieldNumber, int timePartFieldNumber)
        {
            this.Table = table;
            this.DatePartFieldNumber = datePartFieldNumber;
            this.TimePartFieldNumber = timePartFieldNumber;
        }
    }
}
