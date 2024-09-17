import { CardContent,Card, CardHeader, CardTitle } from "@/components/ui/card"
import { getProduct } from "../products.api"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
interface Props {
    params:{
        id:string
    }
}
async function ProductDetailPage({params}:Props) {
    const product = await getProduct(params.id)
    console.log(product)
  return (
    <div className=" flex justify-center items-center h-screen">
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between">
                    Detalle: {product.id}
                    <Link href="/" className={buttonVariants()}>Volver</Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <img src={product.image} alt="" 
                className="w-full object-cover"/>
            </CardContent>
        </Card>
      
    </div>
  )
}

export default ProductDetailPage
