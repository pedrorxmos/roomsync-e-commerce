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
        price: product.price,
        subcategory: product.subcategory,
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

export const updateCart = (id: string, qty: number) => {
  let cart = getCart()

  if (cart.find((prod: Cart) => prod.id === id)) {
    cart = cart.map((prod: Cart) => {
      if (prod.id === id) prod.qty = qty
      return prod
    })

    localStorage.setItem('cart', JSON.stringify([...cart]))
  }
}

export const removeFromCart = (id: string): void => {
  localStorage.setItem(
    'cart',
    JSON.stringify(getCart().filter((prod: Cart) => prod.id !== id))
  )
}

export const removeCart = (): void => {
  localStorage.setItem('cart', JSON.stringify([]))
}
