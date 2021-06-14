using Concierge.Core.DTO.API;
using Concierge.Core.Enums;
using TypeGen.Core.SpecGeneration;

namespace Concierge.Core
{
    public class DtoGenerationSpec : GenerationSpec
    {
        public DtoGenerationSpec()
        {
            AddClass<AuthRequest>();
            AddInterface<ProductFilter>();

            AddEnum<SeatType>();
            AddEnum<SeatStatus>();
        }
    }
}
