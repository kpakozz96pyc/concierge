using System;
using System.Collections.Generic;
using System.Text;
using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class Purchase
    {
        public virtual Product Product { get; set; }

        public double Price { get; set; }

        public virtual PurchaseDescription Description { get; set; }
    }
}
