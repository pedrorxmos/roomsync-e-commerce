import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core'
import { Router } from '@angular/router'
import { Product } from 'src/app/interfaces'

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements AfterViewInit {
  @Input({ required: true })
  public products!: Product[]

  @ViewChild('productSlider') public productSlider?: ElementRef
  public mouseDown: boolean = false

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    const slider = this.productSlider?.nativeElement
    let startX: number
    let scrollLeft: number

    // disable mouse events if device is mobile or tablet
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    )
      return

    slider.addEventListener('mousedown', (e: MouseEvent) => {
      setTimeout(() => {
        this.mouseDown = true
        slider.classList.add('active')
      }, 150)
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })
    slider.addEventListener('mouseleave', () => {
      setTimeout(() => {
        this.mouseDown = false
        slider.classList.remove('active')
      }, 0.1)
    })
    slider.addEventListener('mouseup', () => {
      setTimeout(() => {
        this.mouseDown = false
        slider.classList.remove('active')
      }, 0.1)
    })
    slider.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.mouseDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = x - startX
      slider.scrollLeft = scrollLeft - walk
      // console.log(walk)
    })
  }
}
