import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {

  room = []

  roomno = 0;
  roomtype = '';
  price = 0;
  status = '';
  
  imageUrl : any;
  selectedFile:any

  
  constructor( private router: Router, 
    private roomService: RoomService) { }

  ngOnInit() {
  }

  onAdd()
  {
    this.roomService
    .addRoom(this.roomno, this.roomtype, this.price, this.status, this.selectedFile)
    .subscribe( response => {
      const body = response.json();
      if(body['status'] == 'success'){
        alert('added sucessfuly');
        this.router.navigate(['/room-list']);
      }else{
        alert('error while adding the room');
      }
      })
    }

  onCancel()
  {
    this.router.navigate(['/room-list']);
  }

  onChange($event) {
    this.selectedFile = $event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.imageUrl = fileReader.result;
    };
    fileReader.readAsDataURL(this.selectedFile);
    console.log(this.selectedFile);
  }




}
