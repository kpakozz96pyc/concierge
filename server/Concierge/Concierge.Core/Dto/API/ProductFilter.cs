using System;
using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class ProductFilter
    {
        public int PageNumber { get; set; } = 0;
        public int PageSize { get; set; } = 9;
        public DateTimeOffset? FromDate { get; set; }

        public DateTimeOffset? ToDate { get; set; }

        public string Search { get; set; }
    }
}