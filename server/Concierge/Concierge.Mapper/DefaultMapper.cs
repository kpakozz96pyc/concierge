using AutoMapper;

namespace Concierge.DefaultMapper
{
    public static class DefaultMapperConfiguration
    {
        public static MapperConfiguration Configuration() {
            return new MapperConfiguration(cfg => { 
                cfg.CreateMap<Concierge.Core.DTO.API.Seat, Concierge.DAL.DbModels.Seat>();
            });
        }
    }
}
