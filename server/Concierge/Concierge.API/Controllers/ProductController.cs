using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Concierge.DAL;
using Product = Concierge.DAL.DbModels.Product;

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

        [HttpGet]
        public IEnumerable<Product> GetAll()
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();
                var list = repository.Get();
                return list;
            }
        }


        [HttpGet("GetPage")]
        public IEnumerable<Product> GetPage(int pageNumber, int pageSize)
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();
                var list = repository.GetPage(pageNumber, pageSize);
                return list;
            }
        }


        [HttpPost("CreateProductAsync")]
        public async Task<Guid> CreateProductAsync([FromForm] Contracts.UpdateProduct product)
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();
                repository.Create(new Product
                {
                    Id = product.Id,
                    DisplayName = product.DisplayName,
                    Art = product.Art,
                    Description = product.Description
                });
                return product.Id;
            }
        }

        [HttpPost]
        [Authorize]
        public void Remove(Guid productId)
        {
            using (var uow = _uowFactory.Create())
            {
                var repository = uow.GetRepository<Product>();
                repository.Remove(repository.FindById(productId));
            }
        }

        [HttpGet("GetProduct")]
        [Authorize]
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