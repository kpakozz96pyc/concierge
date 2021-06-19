using System;
using Concierge.DAL.DbModels;
using Concierge.DAL.Uow;

namespace Concierge.DAL
{
    internal class UnitOfWork : IUnitOfWork
    {
        private readonly TheaterContext _database;

        public UnitOfWork(TheaterContext database)
        {
            _database = database;
        }

        public void Dispose()
        {
            _database.Dispose();
        }

        public IRepository<T> GetRepository<T>() where T: DbModel
        {
            var type = typeof(T);
            if(type == typeof(Product)) 
                return new ProductRepository(_database) as IRepository<T>;
            return new Repository<T>(_database);
        }

        public void Commit()
        {
            _database.SaveChanges();
        }

        public void Rollback()
        {
            throw new NotImplementedException();
        }
    }
}