using System.Collections.Generic;
using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class Cart
    {
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Note { get; set; }

        public List<Purchase> Purchases { get; set; }
    }
}
