using Concierge.DAL.DbModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Concierge.DAL.Uow
{
    internal class ProductRepository : Repository<Product>, IRepository<Product> 
    {
        public ProductRepository(TheaterContext context) : base(context)
        { }
        public override IEnumerable<Product> GetPage(int pageNumber, int pageSize)
        {
            return _dbSet
            .Include(p => p.Extended)
            .AsNoTracking()
            .Skip(pageNumber * pageSize).Take(pageSize).ToList();
        }
    }
}

