import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';




@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  selectedRoom = {};

  constructor(
    private roomService: RoomService,
    private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe(params => {
      const roomno = params['roomno'];
      this.roomService
        .getRoomDetails(roomno)
        .subscribe(response => {
          const result = response.json();
          this.selectedRoom = result.data;
        });
    });
  }

  ngOnInit() {
  }

}
