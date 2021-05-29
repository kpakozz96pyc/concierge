using System.Collections.Generic;

namespace Concierge.DAL.DbModels
{
    public class Order: DbModel, IDbModel
    {
        public string Email { get; set; }
        public string Phone { get; set; }
        public List<Product> Products { get; set; } = new List<Product>();
        public string Note { get; set; }
        public decimal Sum { get; set; }
        public bool Payed { get; set; } = false;
    }
}
