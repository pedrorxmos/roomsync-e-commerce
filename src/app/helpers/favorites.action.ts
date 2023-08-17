import { Product } from '../interfaces'

export const getFavorites = (): Product[] => {
  return JSON.parse(localStorage.getItem('favorites')!) || []
}

export const updateFavorites = (product: Product) => {
  const favorites = getFavorites()

  if (favorites.find((prod: Product) => prod.id === product.id)) {
    localStorage.setItem(
      'favorites',
      JSON.stringify(
        favorites.filter((prod: Product) => prod.id !== product.id)
      )
    )
    return
  }

  localStorage.setItem('favorites', JSON.stringify([...favorites, product]))
}
