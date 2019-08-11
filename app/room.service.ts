import { Http, RequestOptions, Headers } from '@angular/http';
import  { Injectable } from '@angular/core';



@Injectable()
export class RoomService
{
  
    url = 'http://localhost:3000/room';

    constructor( private http : Http)
    {

    }

    getRoom()
    {
        return this.http.get(this.url);
    }

    getRoomDetails(roomno: number){
        return this.http.get(this.url + '/' + roomno);
      }

    addRoom(roomno:number , roomtype: string , price: number, status: string, selectedFile: any )
    {
        console.log("My image");
        const body = new FormData();
        body.append("roomno", ''+roomno);
        body.append("roomtype", roomtype);
        body.append("price", ''+price);
        body.append("status", status);
        body.append("imagename", selectedFile);

        return this.http.post(this.url, body);

    }

    updateRoom(){

    }

    deleteRoom(roomno: number){
        console.log("roomno"+ roomno)
        return this.http.delete(this.url + '/' + roomno);

    }

}