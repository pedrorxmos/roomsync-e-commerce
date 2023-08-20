import productsDB from '../../database/products.json'

export const someProducts = productsDB.slice(0, 4)

export const product = {
  id: 'grey-wood-chair',
  name: 'Grey Wood Chair',
  category: 'furniture',
  subcategory: 'chairs',
  price: 59.99,
  stars: 3.2,
  color: ['grey', 'brown'],
  material: ['wood'],
  info: {
    description:
      'A grey woody chair exudes timeless elegance, blending the warmth of wood with a sleek, neutral grey finish. Its minimalist design and sturdy construction provide both comfort and style, making it a perfect addition to any modern or classic interior setting.',
    measures: {
      width: '64cm',
      height: '75cm',
      depth: '75cm'
    }
  }
}
