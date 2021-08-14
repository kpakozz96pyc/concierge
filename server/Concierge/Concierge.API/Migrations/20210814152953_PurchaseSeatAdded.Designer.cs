﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Concierge.API.Migrations
{
    [DbContext(typeof(TheaterContext))]
    [Migration("20210814152953_PurchaseSeatAdded")]
    partial class PurchaseSeatAdded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("Concierge.DAL.DbModels.Cart", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("Note")
                        .HasColumnType("text");

                    b.Property<string>("Phone")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Carts");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.Order", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("Note")
                        .HasColumnType("text");

                    b.Property<bool>("Payed")
                        .HasColumnType("boolean");

                    b.Property<string>("Phone")
                        .HasColumnType("text");

                    b.Property<decimal>("Sum")
                        .HasColumnType("numeric");

                    b.HasKey("Id");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.Product", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Art")
                        .HasColumnType("text");

                    b.Property<string>("DescriptionHTML")
                        .HasColumnType("text");

                    b.Property<string>("DescriptionText")
                        .HasColumnType("text");

                    b.Property<string>("DisplayName")
                        .HasColumnType("text");

                    b.Property<Guid?>("ExtendedId")
                        .HasColumnType("uuid");

                    b.Property<string>("Img")
                        .HasColumnType("text");

                    b.Property<Guid?>("OrderId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("ExtendedId");

                    b.HasIndex("OrderId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.ProductExtended", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTimeOffset>("Start")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("ProductExtended");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.Purchase", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("CartId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("DescriptionId")
                        .HasColumnType("uuid");

                    b.Property<double>("Price")
                        .HasColumnType("double precision");

                    b.Property<Guid?>("ProductId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("CartId");

                    b.HasIndex("DescriptionId");

                    b.HasIndex("ProductId");

                    b.ToTable("Purchase");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.PurchaseDescription", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("SeatId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("SeatId");

                    b.ToTable("PurchaseDescription");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.Seat", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int>("Number")
                        .HasColumnType("integer");

                    b.Property<double>("Price")
                        .HasColumnType("double precision");

                    b.Property<Guid?>("ProductExtendedId")
                        .HasColumnType("uuid");

                    b.Property<int>("Row")
                        .HasColumnType("integer");

                    b.Property<int>("Status")
                        .HasColumnType("integer");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ProductExtendedId");

                    b.ToTable("Seat");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.Product", b =>
                {
                    b.HasOne("Concierge.DAL.DbModels.ProductExtended", "Extended")
                        .WithMany()
                        .HasForeignKey("ExtendedId");

                    b.HasOne("Concierge.DAL.DbModels.Order", null)
                        .WithMany("Products")
                        .HasForeignKey("OrderId");

                    b.Navigation("Extended");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.Purchase", b =>
                {
                    b.HasOne("Concierge.DAL.DbModels.Cart", null)
                        .WithMany("Purchases")
                        .HasForeignKey("CartId");

                    b.HasOne("Concierge.DAL.DbModels.PurchaseDescription", "Description")
                        .WithMany()
                        .HasForeignKey("DescriptionId");

                    b.HasOne("Concierge.DAL.DbModels.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.Navigation("Description");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.PurchaseDescription", b =>
                {
                    b.HasOne("Concierge.DAL.DbModels.Seat", "Seat")
                        .WithMany()
                        .HasForeignKey("SeatId");

                    b.Navigation("Seat");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.Seat", b =>
                {
                    b.HasOne("Concierge.DAL.DbModels.ProductExtended", null)
                        .WithMany("Hall")
                        .HasForeignKey("ProductExtendedId");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.Cart", b =>
                {
                    b.Navigation("Purchases");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.Order", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("Concierge.DAL.DbModels.ProductExtended", b =>
                {
                    b.Navigation("Hall");
                });
#pragma warning restore 612, 618
        }
    }
}
