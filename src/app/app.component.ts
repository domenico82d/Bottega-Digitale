import { Component, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

declare const bootstrap: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'labottega-digitalemitelli';
  
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    // Chiudi il navbar al cambio pagina
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          const navbarCollapse = document.getElementById('navbarNav');
          if (navbarCollapse) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
              bsCollapse.hide();
            }
          }
        });
    }
  }
}
