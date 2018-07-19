import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslationService, Messages } from '../translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private toastr: ToastrService, public ts: TranslationService) {}

  ngOnInit() {}

  showToaster() {
    this.toastr.info(
      this.ts.messages.toastMessage,
      this.ts.messages.toastTitle
    );
  }
}
