import { ApplicationConfig, importProvidersFrom, ImportProvidersSource, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FirebaseService } from '@services';

const _providers: Array<ImportProvidersSource> = [
  FirebaseService
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    importProvidersFrom(_providers),
  ]
};
