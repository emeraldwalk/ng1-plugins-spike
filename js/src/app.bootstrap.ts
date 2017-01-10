import * as angular from 'angular';
import { appModule } from './app.module';

angular.element(() => {
	angular.bootstrap(document.body, [appModule.name]);
});