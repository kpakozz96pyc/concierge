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
        public override IEnumerable<Product> GetAll()
        {
            return _dbSet
            .Include(p => p.Extended)
            .AsNoTracking();
        }

        public override Product FindById(Guid id)
        {
            return _dbSet.Include(p=>p.Extended).ThenInclude(ext => ext.Hall).FirstOrDefault(p=>p.Id == id);
        }
    }
}

