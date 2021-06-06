using Microsoft.EntityFrameworkCore.Migrations;

namespace Concierge.API.Migrations
{
    public partial class DescriptionHTML2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DescriptionHTML",
                table: "Products",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DescriptionHTML",
                table: "Products");
        }
    }
}
