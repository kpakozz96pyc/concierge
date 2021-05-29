using Microsoft.EntityFrameworkCore;
using Concierge.DAL.DbModels;

public class TheaterContext : DbContext
{

    public TheaterContext(DbContextOptions<TheaterContext> options)
       : base(options)
    { }
    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<Cart> Carts { get; set ; }

}