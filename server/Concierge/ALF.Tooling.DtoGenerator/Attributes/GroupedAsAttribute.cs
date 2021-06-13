using ALF.Shared.Dto.Models.DataAccess;
using System;

namespace ALF.Shared.Dto.Attributes
{
    [AttributeUsage(AttributeTargets.Field)]
    public sealed class GroupedAsAttribute : Attribute
    {
        public FeatureGroup FeatureGroup { get; }

        public Feature Feature { get; }

        public GroupedAsAttribute(FeatureGroup featureGroup, Feature feature)
        {
            FeatureGroup = featureGroup;
            Feature = feature;
        }
    }
}
