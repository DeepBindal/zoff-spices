import ProductDetails from '@/components/ProductDetails';
import { getProductById } from '@/lib/actions/product.actions';

const page = async ({params}) => {
    const {id} = await params;
    
    const product = await getProductById(id);
  return (
    <ProductDetails product={product} />
  )
}

export default page