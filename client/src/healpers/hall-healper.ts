import {SeatType} from "../../corelib/seat-type";
import {Seat} from "../../corelib/seat";
import {SeatStatus} from "../../corelib/seat-status";

export class HallHealper {
    public static FindSeat(row: number, seatNumber: number, seatType: SeatType, hall: Seat[], defaultPrice?: number): Seat {
        let seat: Seat;
        switch (seatType) {
            case (+SeatType.Parterre):
                seat = hall.find(s => s.number === seatNumber && seatType == seatType && s.row === row);
            case (+SeatType.Balcony):
                seat = hall.find(s => s.number === seatNumber && seatType == seatType);
            case (+SeatType.Floor):
                seat = hall.find(s => s.number === seatNumber && seatType == seatType);
            case(+SeatType.Unknown):
                seat = hall.find(s => s.number === seatNumber && seatType == seatType);
            default:
                seat = {
                    price: defaultPrice,
                    number: seatNumber,
                    type: seatType,
                    row: row,
                    status: SeatStatus.Unknown
                } as Seat;
        }
        return seat;
    }
}