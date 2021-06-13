using Concierge.Enums.Core;

namespace Concierge.DAL.DbModels
{
    public class Seat : DbModel, IDbModel
    {
        public int Row { get; set; }
        public int Number { get; set; }
        public SeatType Type { get; set; }
        public SeatStatus Status { get; set; }
        public double Price { get; set; }

    }   
}
