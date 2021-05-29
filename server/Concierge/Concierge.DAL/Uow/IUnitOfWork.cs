using System;
using Concierge.DAL.DbModels;

namespace Concierge.DAL
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<T> GetRepository<T>() where T : DbModel;
        void Commit();
        void Rollback();
    }
}