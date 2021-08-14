using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Concierge.API.Migrations
{
    public partial class PurchaseSeatAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlaceNumber",
                table: "PurchaseDescription");

            migrationBuilder.DropColumn(
                name: "RowNumber",
                table: "PurchaseDescription");

            migrationBuilder.AddColumn<Guid>(
                name: "SeatId",
                table: "PurchaseDescription",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseDescription_SeatId",
                table: "PurchaseDescription",
                column: "SeatId");

            migrationBuilder.AddForeignKey(
                name: "FK_PurchaseDescription_Seat_SeatId",
                table: "PurchaseDescription",
                column: "SeatId",
                principalTable: "Seat",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PurchaseDescription_Seat_SeatId",
                table: "PurchaseDescription");

            migrationBuilder.DropIndex(
                name: "IX_PurchaseDescription_SeatId",
                table: "PurchaseDescription");

            migrationBuilder.DropColumn(
                name: "SeatId",
                table: "PurchaseDescription");

            migrationBuilder.AddColumn<int>(
                name: "PlaceNumber",
                table: "PurchaseDescription",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RowNumber",
                table: "PurchaseDescription",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
