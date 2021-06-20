using System;
using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class Product
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Art { get; set; }
        public string Img { get; set; }
        public string DescriptionText { get; set; }
        public string DescriptionHTML { get; set; }

        public ProductExtended Extended { get; set; }
    }
}