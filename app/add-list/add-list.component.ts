import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

import { Router } from '@angular/router';




@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  room = []
  router: any;


  constructor(private roomService : 
    RoomService, router:Router ) {
      this.router = router;
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
  this.router.navigate(['/room-details'], { queryParams: { roomno: room.roomno } });
}

onDelete(room) {
}
}







