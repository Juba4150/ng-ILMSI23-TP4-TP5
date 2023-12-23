import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  langs = [
    { id: 1, lang: 'en' },
    { id: 2, lang: 'fr' },
  ];
  selectdLang = { id: 1, lang: 'en' };
}
