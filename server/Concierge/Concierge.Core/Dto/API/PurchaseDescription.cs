using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class PurchaseDescription
    {
        public Seat Seat { get; set; }
    }
}
