import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ChangeDetectorRef, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';

declare const bootstrap: any;

type Img = {
  src: string;
  alt: string;
  caption?: string;
  orientation: 'h' | 'v';
};


@Component({
  selector: 'app-territorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './territorio.component.html',
  styleUrls: ['./territorio.component.css']
})
export class TerritorioComponent implements AfterViewInit {

  private platformId = inject(PLATFORM_ID);

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // Inizializza manualmente il carousel Bootstrap solo nel browser
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const carouselElement = document.getElementById('territorioCarousel');
        if (carouselElement && typeof bootstrap !== 'undefined') {
          new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            ride: 'carousel',
            pause: false
          });
        }
      }, 100);
    }
  }

// ✅ Metti qui le tue 4 orizzontali
  horizontalImages: Img[] = [
    { src: 'assets/images/slider/orizzontale/2.jpg', alt: '', caption: '', orientation: 'h' },
    { src: 'assets/images/slider/orizzontale/4.jpg', alt: 'Natura e paesaggi', caption: '', orientation: 'h' },
    { src: 'assets/images/slider/orizzontale/1.jpg', alt: 'Panorama di Bocchigliero', caption: '', orientation: 'h' },
    { src: 'assets/images/slider/orizzontale/5.jpg', alt: 'Scorcio del paese', caption: '', orientation: 'h' },
  ];

  // ✅ Solo immagini verticali per gallery
  allImages: Img[] = [
    { src: 'assets/images/slider/verticale/2b.jpg', alt: 'Chiesa Santa Maria Assunta', orientation: 'v' },
    { src: 'assets/images/slider/verticale/3.jpeg', alt: 'Campararo', orientation: 'v' },
    { src: 'assets/images/slider/verticale/4.jpeg', alt: 'Scorci', orientation: 'v' },
    { src: 'assets/images/slider/verticale/5.jpeg', alt: 'San Rocco. Patrono di Bocchigliero', orientation: 'v' },
    { src: 'assets/images/slider/verticale/6.jpeg', alt: 'San Rocco. Patrono di Bocchigliero', orientation: 'v' },
    { src: 'assets/images/slider/verticale/11.jpg', alt: 'Chiesa di San Rocco', orientation: 'v' },
    { src: 'assets/images/slider/verticale/8.jpeg', alt: 'Scorci', orientation: 'v' },
    { src: 'assets/images/slider/verticale/9.jpeg', alt: 'Bocchigliero', orientation: 'v' },
    { src: 'assets/images/slider/verticale/10.jpg', alt: 'Chiesa Santa Maria de Jesu', orientation: 'v' },
    { src: 'assets/images/slider/orizzontale/2.jpg', alt: 'Bocchigliero',  orientation: 'v' },
    { src: 'assets/images/slider/orizzontale/4.jpg', alt: 'Bocchigliero', orientation: 'v' },
    { src: 'assets/images/slider/orizzontale/1.jpg', alt: 'Bocchigliero',  orientation: 'v' },
    { src: 'assets/images/slider/orizzontale/5.jpg', alt: 'Bocchigliero', orientation: 'v' },
    { src: 'assets/images/slider/verticale/12.jpeg', alt: 'Bocchigliero',  orientation: 'v' },
  ];

  selectedIndex = 0;
  selectedImage: Img | null = null;
  isModalOpen = false;

  openLightbox(index: number) {
    this.selectedIndex = index;
    this.selectedImage = this.allImages[this.selectedIndex];
    this.isModalOpen = true;
    this.cdr.detectChanges();
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
      
      setTimeout(() => {
        const backdrop = document.querySelector('.lightbox-backdrop') as HTMLElement;
        if (backdrop) {
          backdrop.focus();
        }
      }, 100);
    }
  }

  closeLightbox() {
    this.isModalOpen = false;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('lightbox-backdrop')) {
      this.closeLightbox();
    }
  }

  prevImage() {
    this.selectedIndex = (this.selectedIndex - 1 + this.allImages.length) % this.allImages.length;
    this.selectedImage = this.allImages[this.selectedIndex];
  }

  nextImage() {
    this.selectedIndex = (this.selectedIndex + 1) % this.allImages.length;
    this.selectedImage = this.allImages[this.selectedIndex];
  }



}
