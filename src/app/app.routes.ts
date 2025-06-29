import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VisionComponent } from './vision/vision.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { AttivitaComponent } from './attivita/attivita.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaglieriComponent } from './products/taglieri/taglieri.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'vision', component: VisionComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'attivita', component: AttivitaComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'products/taglieri', component: TaglieriComponent },
];


