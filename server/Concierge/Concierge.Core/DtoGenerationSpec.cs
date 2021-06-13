using Concierge.Core.DTO.API;
using System;
using System.Collections.Generic;
using System.Text;
using TypeGen.Core.SpecGeneration;

namespace Concierge.Core
{
    public class DtoGenerationSpec : GenerationSpec
    {
        public DtoGenerationSpec()
        {
            AddClass<AuthRequest>();
        }
    }
}
