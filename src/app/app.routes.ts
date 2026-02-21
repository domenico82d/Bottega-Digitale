import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TerritorioComponent } from './territorio/territorio.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AttivitaComponent } from './attivita/attivita.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaglieriComponent } from './products/taglieri/taglieri.component';
import { RingraziamentiComponent } from './ringraziamenti/rigraziamenti.component';
import { BronziDiCartaComponent } from './projects/bronzi-di-carta/bronzi-di-carta.component';
import { IncisioniNarrantiComponent } from './projects/incisioni-narranti/incisioni-narranti.component';
import { MagnaSilaComponent } from './projects/magna-sila/magna-sila.component';
import { IlCieloESemprePiuBluComponent } from './projects/il-cielo-e-sempre-piu-blu/il-cielo-e-sempre-piu-blu.component';
import { CorradoAlvaroComponent } from './corrado-alvaro/corrado-alvaro.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'territorio', component: TerritorioComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'attivita', component: AttivitaComponent },
  { path: 'corrado-alvaro', component: CorradoAlvaroComponent },
  { path: 'rigraziamenti', component: RingraziamentiComponent },

];


