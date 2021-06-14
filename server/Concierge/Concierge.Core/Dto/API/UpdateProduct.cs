﻿using System;

namespace Concierge.Core.DTO.API
{
    public class UpdateProduct
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Art { get; set; }
        public string Description { get; set; }

        public string DescriptionHTML { get; set; }

        public string Image { get; set; }

        public DateTimeOffset Start { get; set; }
    }
}