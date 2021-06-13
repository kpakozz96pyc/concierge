using ALF.Shared.Dto.Models.Access;
using ALF.Shared.Dto.Models.DataAccess.Populations;
using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Field, AllowMultiple = true)]
    public sealed class LinkedToPopulationTypeAttribute : Attribute
    {
        public PopulationType PopulationType { get; }

        public AccessLevel AccessLevel { get; }

        public LinkedToPopulationTypeAttribute(PopulationType populationType, AccessLevel accessLevel)
        {
            this.PopulationType = populationType;
            this.AccessLevel = accessLevel;
        }
    }
}
