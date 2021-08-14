using Concierge.Core.DTO.API;
using System.Collections.Generic;

namespace Concierge.BL
{
      /// <summary>
      /// Class to store BL connected with Hall activities should operate only with DTO not DAL
      /// </summary>
    public interface IHallManager
    {
        List<Seat> CreateDeafaultHall(double? defaultPrice);
    }

    public class HallManager : IHallManager
    {

        public HallManager() { }
        public List<Seat> CreateDeafaultHall(double? defaultPrice)
        {
            var hall = new List<Seat>();
            //Parter
            int seats = 18;
            int rows = 10;
            double defaultDefaultPrice = 100;
            for(int i = 0; i< rows; i++)
            {
                for(int j=0; j < seats; j++)
                {
                    hall.Add(
                        new Seat { Number = j, Row= i, Status= Core.Enums.SeatStatus.Free, Price = defaultPrice ?? defaultDefaultPrice, Type = Core.Enums.SeatType.Parterre }
                        );
                }
            }

            //Balcony

            int balcony = 100;
            for (int i = 0; i < balcony; i++)
            {
                hall.Add(
                        new Seat { Number = i, Row = 0, Status = Core.Enums.SeatStatus.Free, Price = (defaultPrice ?? defaultDefaultPrice) * 2, Type = Core.Enums.SeatType.Balcony }
                        );
            }

            return hall;
        }
    }
}
