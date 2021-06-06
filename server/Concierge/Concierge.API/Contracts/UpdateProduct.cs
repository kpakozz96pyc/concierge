using System;
using Microsoft.AspNetCore.Http;

namespace Concierge.Api.Contracts
{
    public class UpdateProduct
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Art { get; set; }
        public string Description { get; set; }

        public string DescriptionHTML { get; set; }

        public string Image { get; set; }
    }
}