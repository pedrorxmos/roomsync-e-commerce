import { Material, Product } from 'src/app/interfaces'

export const materialFilter = (products: Product[] | undefined): Material[] => {
  return [
    {
      name: 'Plastic',
      id: 'plastic',
      products:
        products?.filter((prod) => prod.material.includes('plastic')) || []
    },
    {
      name: 'Wood',
      id: 'wood',
      products: products?.filter((prod) => prod.material.includes('wood')) || []
    },
    {
      name: 'Fabric',
      id: 'fabric',
      products:
        products?.filter((prod) => prod.material.includes('fabric')) || []
    },
    {
      name: 'Metal',
      id: 'metal',
      products:
        products?.filter((prod) => prod.material.includes('metal')) || []
    }
  ]
}
