import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-mobile-nav-component',
  imports: [RouterModule],
  templateUrl: './mobile-nav-component.component.html',
  styleUrl: './mobile-nav-component.component.css',
})
export class MobileNavComponentComponent {
  @ViewChild('plusModal') plusModal!: ElementRef;
  private modalInstance: any;

  constructor(public router: Router) {}

  ngAfterViewInit(): void {
    this.modalInstance = new bootstrap.Modal(this.plusModal.nativeElement, {
      backdrop: true,
      keyboard: true
    });
  }

  openModal(): void {
    this.modalInstance?.show();
  }

  closeModal(): void {
    this.modalInstance?.hide();
  }

  navigateAndClose(path: string): void {
    this.closeModal();
    this.router.navigate([path]);
  }
}
