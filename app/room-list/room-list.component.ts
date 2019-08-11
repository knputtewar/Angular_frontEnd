import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  room = []
  router: any;

  constructor(private roomService : RoomService,router:Router ) { 
    this.router=router;
  this.refreshRoomList();
  }

  ngOnInit() {
  }

  refreshRoomList() {
    this.roomService
      .getRoom()
      .subscribe(response => {
        const result = response.json();
        console.log(result);
        this.room = result.data;
      });
  }

  onDetails(room) {
    this.router.navigate(['/room-details'], 
    { queryParams: { roomno: room.roomno } });
  }

  onDelete(room) {


    const answer = confirm('Are you sure you want to delete '
     +  room.roomno + ' ?');
    if (answer) {
      console.log('inside delete', room.roomno);
      this.roomService
        .deleteRoom(room.roomno)
        .subscribe(response => {
          const result = response.json();
          console.log(result);
          this.refreshRoomList();
        });
    }
  }
}
