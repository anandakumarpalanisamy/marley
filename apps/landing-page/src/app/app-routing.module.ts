// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ------------------------------------------------------------------------------
// Import components/pages
// ------------------------------------------------------------------------------
import { WelcomeComponent } from './modules/welcome/pages/welcome.component';
import { ContactComponent } from './modules/contact/pages/contact.component';

// ------------------------------------------------------------------------------
// Import custom preload strategy
// ------------------------------------------------------------------------------
import { SelectivePreloadingStrategy } from './preloading-strategy';

// ------------------------------------------------------------------------------
// Import environments
// ------------------------------------------------------------------------------
import { environment } from '../environments/environment';

// -----------------------------------------------------------------------------
// Route Configuration
// ------------------------------------------------------------------------------
const routes: Routes = [
	{ path: '', component: WelcomeComponent, pathMatch: 'full' },
	{ path: 'contact', component: ContactComponent, data: { preload: true } },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			enableTracing: environment.production ? false : true,
			preloadingStrategy: SelectivePreloadingStrategy,
		}),
	],
	providers: [SelectivePreloadingStrategy],
	exports: [RouterModule],
})
export class AppRoutingModule {}
