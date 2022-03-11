import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EN_TRANSLATION } from '../i18n/en';
import { EN, RU } from '../i18n/i18n.model';
import { RU_TRANSLATION } from '../i18n/ru';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  public currentLanguage = EN;

  constructor(
    public translate: TranslateService
  ) {
    translate.setTranslation(EN, EN_TRANSLATION);
    translate.setTranslation(RU, RU_TRANSLATION);
    translate.setDefaultLang(EN);
    translate.use(EN);
  }

  set(lang: string) {
    this.currentLanguage = lang;
    this.translate.use(lang);
  }

  get() {
    return this.currentLanguage;
  }
}
