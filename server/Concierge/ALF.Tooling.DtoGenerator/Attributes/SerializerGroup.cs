using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Enum)]
    public class SerializerGroup : Attribute
    {
        public string Name { get; }

        public bool IsRoot { get; set; }

        public SerializerGroup(string name)
        {
            Name = name;
        }
    }
}
