import {SeatType} from "../../corelib/seat-type";
import {Seat} from "../../corelib/seat";
import {SeatStatus} from "../../corelib/seat-status";

export class HallHelper {
    public static FindSeat(  hall: Seat[], seatType: SeatType, seatNumber: number, row?: number,): Seat| null {
        if(seatType == SeatType.Parterre && (row || row === 0)){
            return hall.find(s => s.type == seatType && s.row ===row && s.number === seatNumber);
        }
        if(seatType === SeatType.Floor || seatType === SeatType.Balcony)
        {
            return hall.find(s => s.type == seatType && s.number === seatNumber);
        }
        return null;
    }

    public static GetFreeSeats(hall: Seat[]): Seat[] {
        return hall.filter(s => s.status == SeatStatus.Free);
    }

    public static GetFreeSeatTypes(hall: Seat[]): SeatType[] {
        return Array.from( new Set(hall.filter(s => s.status == SeatStatus.Free).map(s=>s.type)));
    }

    public static GetFreeParterreRowNumbers(hall: Seat[]): number[] {
        return Array.from(new Set(hall.filter(s => s.status == SeatStatus.Free && s.type == SeatType.Parterre).map(s => s.row)));
    }

    public static GetFreeParterreRowSeatNumbers(row: number, hall: Seat[]): number[] {
        return Array.from(new Set(hall.filter(s => s.status == SeatStatus.Free && s.type == SeatType.Parterre && s.row == row).map(s => s.number)));
    }

    public static GetFreeSeatNumbersByType(hall: Seat[], type: SeatType): number[] {
        return Array
            .from(new Set(hall
                .filter(s => s.status == SeatStatus.Free && s.type == type)
                .map(s => s.number))
            );
    }


    public static GetFreeSeatNumbersByTypeAndRow(hall: Seat[], type: SeatType, row?: number){
        if(type === SeatType.Parterre && (row || row === 0)){
            return this.GetFreeParterreRowSeatNumbers(row, hall);
        }
        return this.GetFreeSeatNumbersByType(hall, type);

    }
}