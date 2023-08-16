import { Cart, Product } from '../interfaces/product.interface'

export const addToCart = (product: Product, qty: number): void => {
  let cart = JSON.parse(localStorage.getItem('cart')!) || []

  if (cart.find((prod: Cart) => prod.id === product.id)) {
    cart = cart.map((prod: Cart) => {
      if (prod.id === product.id) prod.qty += qty
      return prod
    })

    localStorage.setItem('cart', JSON.stringify([...cart]))

    return
  }

  localStorage.setItem(
    'cart',
    JSON.stringify([
      ...cart,
      {
        name: product.name,
        id: product.id,
        price: product.id,
        qty
      }
    ])
  )
}
