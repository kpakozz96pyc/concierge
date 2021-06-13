using ALF.Shared.Dto.Helpers.Lonn;
using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class DatabaseFieldNumberAttribute : Attribute
    {
        public DatabaseTableEnum Table { get; set; }
        public int FieldNumber { get; set; }

        public DatabaseFieldNumberAttribute(DatabaseTableEnum table, int fieldNumber)
        {
            Table = table;
            FieldNumber = fieldNumber;
        }
    }
}
