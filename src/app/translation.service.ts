import { Injectable } from '@angular/core';

export class Messages {
  toastTitle: string;
  toastMessage: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _messages: Messages = new Messages();
  get messages(): Messages {
    return this._messages;
  }

  constructor() {}
}
