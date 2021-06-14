using System;
using System.Collections.Generic;

namespace Concierge.DAL
{
    public interface IRepository<TEntity>
    {
        void Create(TEntity item);
        TEntity FindById(Guid id);
        IEnumerable<TEntity> Get();

        IEnumerable<TEntity> GetPage(int pageNumber, int pageSize);
        IEnumerable<TEntity> Get(Func<TEntity, bool> predicate);
        void Remove(TEntity item);
        void Update(TEntity item);

    }
}