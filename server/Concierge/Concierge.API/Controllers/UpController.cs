using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Concierge.Api.Attributes;

namespace Concierge.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UpController : ControllerBase
    {
        [HttpGet]
        public async Task<string> Get()
        {
            return "i'm up";
        }
    }
}