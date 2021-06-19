using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using Concierge.DAL.DbModels;

namespace Concierge.DAL
{
    internal class Repository<TEntity> : IRepository<TEntity> where TEntity: DbModel
    {
        internal readonly TheaterContext _context;
        internal readonly DbSet<TEntity> _dbSet;
        public Repository(TheaterContext context)
        {
            _context = context;
            _dbSet = context.Set<TEntity>();
        }


        public virtual IEnumerable<TEntity> GetPage(int pageNumber, int pageSize)
        {
            return _dbSet.AsNoTracking().Skip(pageNumber * pageSize).Take(pageSize).ToList();
        }

        public IEnumerable<TEntity> Get()
        {
            return _dbSet.AsNoTracking().ToList();
        }

        public IEnumerable<TEntity> Get(Func<TEntity, bool> predicate)
        {
            return _dbSet.AsNoTracking().Where(predicate).ToList();
        }
        public TEntity FindById(Guid id)
        {
            return _dbSet.Find(id);
        }

        public void Create(TEntity item)
        {
            _dbSet.Add((TEntity)item);
            _context.SaveChanges();
        }
        public void Update(TEntity item)
        {
            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();
        }
        public void Remove(TEntity item)
        {
            _dbSet.Remove(item);
            _context.SaveChanges();
        }
    }
}