import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VisionComponent } from './vision/vision.component';
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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'attivita', component: AttivitaComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'products/taglieri', component: TaglieriComponent },
  { path: 'ringraziamenti', component: RingraziamentiComponent },
  { path: 'projects/bronzi-di-carta', component: BronziDiCartaComponent },
  { path: 'projects/il-cielo-e-sempre-piu-blu', component: IlCieloESemprePiuBluComponent },
  { path: 'projects/incisioni-narranti', component: IncisioniNarrantiComponent },
  { path: 'projects/magna-sila', component: MagnaSilaComponent }
];


