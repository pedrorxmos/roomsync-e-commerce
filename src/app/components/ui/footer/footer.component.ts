import { Component, ElementRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild('notice') public notice?: ElementRef
  @ViewChild('input') public input?: ElementRef
  @ViewChild('error') public error?: ElementRef

  public isValid: boolean = true
  private emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  public emailSent?: string

  onNewsletterOpen(): void {
    if (
      !this.input?.nativeElement.value.toLowerCase().match(this.emailPattern)
    ) {
      this.error?.nativeElement.classList.add('error')

      return
    }

    this.emailSent = this.input?.nativeElement.value
    this.error?.nativeElement.classList.remove('error')
    this.notice?.nativeElement.classList.add('open')
  }

  onNewsletterClose(): void {
    this.notice?.nativeElement.classList.remove('open')
  }
}
