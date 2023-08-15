import { Color, Product } from 'src/app/interfaces'

export const colorFilter = (products: Product[] | undefined): Color[] => {
  return [
    {
      name: 'White',
      id: 'white',
      hex: '#FFFFFF',
      products: products?.filter((prod) => prod.color.includes('white')) || []
    },
    {
      name: 'Black',
      id: 'black',
      hex: '#171717',
      products: products?.filter((prod) => prod.color.includes('black')) || []
    },
    {
      name: 'Grey',
      id: 'grey',
      hex: '#969696',
      products: products?.filter((prod) => prod.color.includes('grey')) || []
    },
    {
      name: 'Brown',
      id: 'brown',
      hex: '#98571B',
      products: products?.filter((prod) => prod.color.includes('brown')) || []
    },
    {
      name: 'Red',
      id: 'red',
      hex: '#F34C4C',
      products: products?.filter((prod) => prod.color.includes('red')) || []
    },
    {
      name: 'Blue',
      id: 'blue',
      hex: '#29BBE9',
      products: products?.filter((prod) => prod.color.includes('blue')) || []
    },
    {
      name: 'Green',
      id: 'green',
      hex: '#5BDE60',
      products: products?.filter((prod) => prod.color.includes('green')) || []
    },
    {
      name: 'Yellow',
      id: 'yellow',
      hex: '#EFE849',
      products: products?.filter((prod) => prod.color.includes('yellow')) || []
    }
  ]
}
