import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: 'donate.page.html',
  styleUrls: ['donate.page.scss']
})
export class Tab2Page {
  APIUrl: string = 'https://www.google.com/maps/search/?api=1&query=Ponto%20de%20doacao%20de%20'

  constructor() { }

  donate(action: 'foods' | 'clothes' | 'blood') {
    const url = this.APIUrl + (action === 'foods' ? 'alimentos' : action === 'clothes' ? 'roupas' : 'sangue');
    this.openUrl(url);
  }

  openUrl(url: string) {
    window.open(url, '_blank').focus()
  }
}
