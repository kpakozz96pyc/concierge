using System;
using System.Collections.Generic;
using System.Text;

namespace Concierge.DAL.DbModels
{
    public class Cart: DbModel, IDbModel
    {
        public string Email { get; set; }
        public string Phone { get; set; }
        public List<Product> Products { get; set; } = new List<Product>();
        public string Note { get; set; }
    }
}
