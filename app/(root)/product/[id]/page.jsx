import ProductDetails from '@/components/ProductDetails';
import { getProductById } from '@/lib/actions/product.actions';
import { getUser } from '@/lib/actions/user.actions';
import { currentUser, getAuth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';


const page = async ({params}) => {
    const current_user = await currentUser();
    if(!current_user) redirect('/sign-in')
    const user_id = current_user.id;
    const user = await getUser(user_id);
    const {id} = await params;
    
    const product = await getProductById(id);
  return (
    <ProductDetails product={product} userId={user._id} />
  )
}

export default page