using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Concierge.API.Migrations
{
    public partial class ExtendProject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Products",
                newName: "DescriptionText");

            migrationBuilder.AddColumn<Guid>(
                name: "ExtendedId",
                table: "Products",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ProductExtended",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Start = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductExtended", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Seat",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Row = table.Column<int>(type: "integer", nullable: false),
                    Number = table.Column<int>(type: "integer", nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Status = table.Column<int>(type: "integer", nullable: false),
                    Price = table.Column<double>(type: "double precision", nullable: false),
                    ProductExtendedId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Seat", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Seat_ProductExtended_ProductExtendedId",
                        column: x => x.ProductExtendedId,
                        principalTable: "ProductExtended",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Products_ExtendedId",
                table: "Products",
                column: "ExtendedId");

            migrationBuilder.CreateIndex(
                name: "IX_Seat_ProductExtendedId",
                table: "Seat",
                column: "ProductExtendedId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_ProductExtended_ExtendedId",
                table: "Products",
                column: "ExtendedId",
                principalTable: "ProductExtended",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_ProductExtended_ExtendedId",
                table: "Products");

            migrationBuilder.DropTable(
                name: "Seat");

            migrationBuilder.DropTable(
                name: "ProductExtended");

            migrationBuilder.DropIndex(
                name: "IX_Products_ExtendedId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "ExtendedId",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "DescriptionText",
                table: "Products",
                newName: "Description");
        }
    }
}
