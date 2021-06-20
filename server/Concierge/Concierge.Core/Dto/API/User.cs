using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class User
    {
        public string Login { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }
    }
}