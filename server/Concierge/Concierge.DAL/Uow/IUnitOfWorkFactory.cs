using System.Data;

namespace Concierge.DAL
{
    public interface IUnitOfWorkFactory
    {
        IUnitOfWork Create();
    }
}