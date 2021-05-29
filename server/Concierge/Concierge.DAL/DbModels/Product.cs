using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Concierge.DAL.DbModels
{
    public class Product: DbModel, IDbModel
    {
        public string DisplayName { get; set; }
        public string Art { get; set; }
        public string Img { get; set; }
        public string Description { get; set; }
    }
}
