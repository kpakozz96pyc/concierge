using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Concierge.DAL.DbModels
{
    public interface IDbModel
    {

    }

    public abstract class DbModel
    {
        [Key]
        public Guid Id { get; set; }
    }
}
