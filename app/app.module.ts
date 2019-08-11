import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { AddroomComponent } from './addroom/addroom.component';
import { RoomListComponent } from './room-list/room-list.component';
import {RoomService} from './room.service';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { AddListComponent } from './add-list/add-list.component';
//import { AddroomComponent } from './addroom/addroom.component';



@NgModule({
  declarations: [
    AppComponent,
    AddroomComponent,
    RoomListComponent,
    ContactUsComponent,
    RoomDetailsComponent,
    LoginComponent,
    HelpComponent,
    AddListComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'room-add', component: AddroomComponent,canActivate: [UserService]   },
      { path: 'room-list', component: RoomListComponent },
      { path: 'Contact-us', component: ContactUsComponent},
      { path: 'room-details', component: RoomDetailsComponent},
      { path: 'help', component: HelpComponent},
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    RoomService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }