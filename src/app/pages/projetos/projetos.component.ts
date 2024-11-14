import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements AfterViewInit {
  currentSlide = 0;
  totalSlides = 0;

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      this.totalSlides = document.querySelectorAll('.carrossel-inner .card-projeto').length;
      this.updateControlsVisibility();
    }
  }

  moveCarrossel(direction: number) {
    this.currentSlide = (this.currentSlide + direction + this.totalSlides) % this.totalSlides;
    const carrosselInner = document.querySelector('.carrossel-inner') as HTMLElement;
    carrosselInner.style.transform = `translateX(-${this.currentSlide * (100 / this.totalSlides)}%)`;
  }

  shouldShowControls(): boolean {
    return this.totalSlides > 3;
  }

  updateControlsVisibility() {
    const controls = document.querySelectorAll('.carrossel-control');
    controls.forEach(control => {
      if (this.shouldShowControls()) {
        control.classList.remove('hidden');
      } else {
        control.classList.add('hidden');
      }
    });
  }
}
