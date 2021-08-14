using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Concierge.DAL.DbModels
{
    public class PurchaseDescription : DbModel, IDbModel
    {
        public Seat Seat { get; set; }
    }
}
