using System;
using System.Collections.Generic;
using System.Text;

namespace Concierge.DAL.DbModels
{
    public class Cart : DbModel, IDbModel
    {
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Note { get; set; }

        public virtual List<Purchase> Purchases {get; set;}
    }
}
