using System;
using System.Collections.Generic;

namespace Concierge.DAL.DbModels
{
    public class ProductExtended : DbModel, IDbModel
    {
        public List<Seat> Hall { get; set; } = new List<Seat>();

        public DateTimeOffset Start { get; set; }
    }
}
