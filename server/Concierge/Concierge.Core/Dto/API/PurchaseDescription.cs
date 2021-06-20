using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class PurchaseDescription
    {
        public int RowNumber { get; set; }

        public int PlaceNumber { get; set; }
    }
}
