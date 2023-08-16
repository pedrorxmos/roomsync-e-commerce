import { Cart, Product } from '../interfaces/product.interface'

export const getCart = (): Cart[] => {
  return JSON.parse(localStorage.getItem('cart')!) || []
}

export const addToCart = (product: Product, qty: number): void => {
  let cart = getCart()

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

export const getCartQtyLength = (): number => {
  let qty = 0

  const cart = getCart()
  cart.forEach((prod: Cart) => {
    qty += prod.qty
  })

  return qty
}
