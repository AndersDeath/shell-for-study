import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EN, RU } from 'sfs-data-model';
import { EN_TRANSLATION } from 'src/app/i18n/en';
import { RU_TRANSLATION } from 'src/app/i18n/ru';
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
