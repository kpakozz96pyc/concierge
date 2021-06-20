using System;
using System.Collections.Generic;
using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class ProductExtended
    {
        public List<Seat> Hall { get; set; } = new List<Seat>();

        public DateTimeOffset Start { get; set; }
    }
}
