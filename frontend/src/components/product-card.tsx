'use client'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { deletePproduct } from "@/app/products/products.api";
import { useRouter } from "next/navigation";



const ProductCard = ({product}:any) => {

    const router = useRouter();
    async function handleDeleteProduct(id){
        await deletePproduct(id);
        router.refresh();
    
    }
  return (
    <Card onClick={() => {router.push(`/products/${product.id}`)}}>
            <CardHeader>
              <CardTitle className="flex justify-between">{product.name} 
                <span className="text-sm font-bold text-gray-500">$:{product.price}</span></CardTitle>
            </CardHeader>
            <img src={product.image} alt="" />
            <CardContent>
            <p>{product.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
            <Button onClick={(e) => {e.stopPropagation() 
                router.push(`/products/${product.id}/edit`)} }
                className="mt-5">Editar</Button>
            <Button onClick={(e)=> { e.stopPropagation() 
              handleDeleteProduct(product.id)}} className="mt-5" variant="destructive">Eliminar</Button>
            </CardFooter>
          </Card>
  )
}

export default ProductCard
