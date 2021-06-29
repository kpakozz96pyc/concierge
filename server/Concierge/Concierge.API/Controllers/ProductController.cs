using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Concierge.DAL;
using Product = Concierge.DAL.DbModels.Product;
using Seat = Concierge.DAL.DbModels.Seat;
using ProductExtended = Concierge.DAL.DbModels.ProductExtended;
using Concierge.Core.DTO.API;
using System.Linq;
using Concierge.DAL.DbModels;

namespace Concierge.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IUnitOfWorkFactory _uowFactory;


        public ProductController(IUnitOfWorkFactory uowFactory)
        {
            _uowFactory = uowFactory;
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
                    list = list.Where(p => p.DisplayName.ToLowerInvariant().Contains(filter.Search.ToLowerInvariant()));
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
                    Hall = new List<Seat>()
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
                repository.Remove(repository.FindById(productId));
            }
        }

        [HttpGet("GetProduct")]
        public Product GetProduct(Guid productId)
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();
                return repository.FindById(productId);
            }
        }
    }
}