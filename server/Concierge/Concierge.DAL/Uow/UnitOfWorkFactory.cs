using Microsoft.EntityFrameworkCore;
using System;
using System.Data;

namespace Concierge.DAL
{
    public class UnitOfWorkFactory : IUnitOfWorkFactory
    {
        private readonly string _connectionString;

        public UnitOfWorkFactory(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IUnitOfWork Create()
        {
            var optionsBuilder = new DbContextOptionsBuilder<TheaterContext>();
            optionsBuilder.UseNpgsql(_connectionString);
            
            return new UnitOfWork(new TheaterContext(optionsBuilder.Options));
        }
    }
}