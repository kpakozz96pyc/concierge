using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Concierge.DAL.DbModels
{
    public class PurchaseDescription : DbModel, IDbModel
    {
        public int RowNumber { get; set; }

        public int PlaceNumber { get; set; }
    }
}
