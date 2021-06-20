using Concierge.Core.Enums;
using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class Seat
    {
        public int Row { get; set; }
        public int Number { get; set; }
        public SeatType Type { get; set; }
        public SeatStatus Status { get; set; }
        public double Price { get; set; }

    }   
}
