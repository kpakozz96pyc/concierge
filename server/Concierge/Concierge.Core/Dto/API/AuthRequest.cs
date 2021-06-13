using TypeGen.Core.TypeAnnotations;

namespace Concierge.Core.DTO.API
{
    [ExportTsClass]
    public class AuthRequest
    {
        public string Login { get; set; }
        public string Password { get; set; }
    }
}