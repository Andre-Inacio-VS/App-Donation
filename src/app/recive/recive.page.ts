import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recive',
  templateUrl: 'recive.page.html',
  styleUrls: ['recive.page.scss'],
})
export class Tab3Page implements OnInit {
  APIUrl: string = 'https://api.whatsapp.com/send?';

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private contatoService: ContatoService,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  enviar() {
    const number = '17997240690';
    const name = this.form.get('nome').value;
    const address = this.form.get('endereco').value;
    this.openUrl(number, name, address);
  }

  openUrl(number: string, name: string, address: string) {
    const url = `${this.APIUrl}phone=${number}&text=Ol%C3%A1,%20me%20chamo%20${name}.%20Sou%20de%20${address},%20e%20gostaria%20de%20receber%20doacoes!!`;
    window.open(url, '_blank').focus();
  }
}
