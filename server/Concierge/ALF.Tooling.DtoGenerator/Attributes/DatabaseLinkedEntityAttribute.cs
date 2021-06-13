using ALF.Shared.Dto.Helpers.Lonn;
using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Class)]
    public class DatabaseLinkedEntityAttribute : Attribute
    {
        public DatabaseTableEnum Table { get; }

        public DatabaseLinkedEntityAttribute(DatabaseTableEnum table) => Table = table;
    }
}
