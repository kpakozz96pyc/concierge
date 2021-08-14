using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Concierge.DAL;
using Product = Concierge.DAL.DbModels.Product;
using Seat = Concierge.DAL.DbModels.Seat;
using ProductExtended = Concierge.DAL.DbModels.ProductExtended;
using Concierge.Core.DTO.API;
using System.Linq;
using Concierge.BL;
using AutoMapper;

namespace Concierge.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IUnitOfWorkFactory _uowFactory;

        private readonly IHallManager _hallManager;

        private readonly IMapper _mapper;


        public ProductController(IUnitOfWorkFactory uowFactory, IHallManager hallManager, IMapper mapper)
        {
            _uowFactory = uowFactory;
            _hallManager = hallManager;
            _mapper = mapper;
        }

        [HttpGet("GetAll")]
        public IEnumerable<Product> GetAll()
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();
                var list = repository.GetAll();
                return list.ToList();
            }
        }


        [HttpPost("Search")]
        public IEnumerable<Product> Search(ProductFilter filter)
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();

                var list = repository.GetAll();

                if (!String.IsNullOrEmpty(filter.Search))
                {
                    list = list.Where(
                        p => p.DisplayName.ToLowerInvariant().Contains(filter.Search.ToLowerInvariant())
                        || (!String.IsNullOrEmpty(p.DescriptionText) && p.DescriptionText.ToLowerInvariant().Contains(filter.Search.ToLowerInvariant()))
                        || (!String.IsNullOrEmpty(p.DescriptionHTML) && p.DescriptionHTML.ToLowerInvariant().Contains(filter.Search.ToLowerInvariant()))
                        );
                }

                if (filter.FromDate.HasValue)
                {
                    list = list.Where(p => p.Extended?.Start > filter.FromDate);
                }

                if (filter.ToDate.HasValue)
                {
                    list = list.Where(p => p.Extended?.Start < filter.FromDate);
                }

                list = list.Skip(filter.PageNumber * filter.PageSize).Take(filter.PageSize);

                return list.ToList();
            }
        }


        [HttpPost("CreateProductAsync")]
        public async Task<Guid> CreateProductAsync([FromForm] UpdateProduct product)
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();
                var ext = new ProductExtended
                {
                    Start = product.Start,
                    Hall = _hallManager
                        .CreateDeafaultHall(product.DefaultSeatPrice)
                        .Select(dto => _mapper.Map<Seat>(dto)).ToList()
                };

                repository.Create(new Product
                {
                    Id = product.Id,
                    DisplayName = product.DisplayName,
                    Art = product.Art,
                    DescriptionText = product.Description,
                    DescriptionHTML = product.DescriptionHTML,
                    Img = product.Image,
                    Extended = ext

                });
                return product.Id;
            }
        }

        [HttpPost("Remove")]
        public void Remove(Guid productId)
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();
                var item = repository.FindById(productId);
                repository.Remove(item);
            }
        }

        [HttpGet("GetProduct")]
        public Product GetProduct(Guid productId)
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();
                var a = repository.FindById(productId);
                return a;
            }
        }
    }
}