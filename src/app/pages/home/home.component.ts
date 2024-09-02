import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedLanguage:any;
  isLanding = 'true';
  isMoreInfo = 'true';

  hidden = true;
  isPlaying = false;
  isPlaying2 = false;

  audio:any = "../../../assets/media/audio/English/Female/Send_message_english_female.mp3";
  audio2:any = '../../../assets/media/audio/English/Female/Receive_message_english_female.mp3';

  // for audio intput
  @ViewChild('audioPlayer', { static: false }) audioPlayer: any;
  @ViewChild('audioPlayer2', { static: false }) audioPlayer2: any;

  // for qr code
  urlId:any;
  hasReloaded:any;
  qrData:any = {};
  country:any = null;

  constructor(private roote: ActivatedRoute, private api: DataService, private router: Router) { }

  ngOnInit(): void { }

}
