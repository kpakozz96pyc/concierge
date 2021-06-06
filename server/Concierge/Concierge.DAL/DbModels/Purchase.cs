using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Concierge.DAL.DbModels
{
    public class Purchase: DbModel, IDbModel
    {
        public virtual Product Product { get; set; }

        public double Price { get; set; }

        public virtual PurchaseDescription Description { get; set; }
    }
}
