using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace Concierge.Api.Attributes
{
    public class AuthOptions
    {
        public const string ISSUER = "GnomjAuthServer"; // издатель токена
        public const string AUDIENCE = "GnomjAuthClient"; // потребитель токена
        const string KEY = "gnomj_secretkey!123";   // ключ для шифрации
        public const int LIFETIME = 360; // время жизни токена - 1 минута
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}