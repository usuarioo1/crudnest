import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import ProductCard from "@/components/product-card";



export const dynamic = 'force-dynamic'

async function HomePage() {
  const products = await getProducts();
  console.log(products);
  return (
    <>
      {" "}
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">NextNestAPP</h1>
        <Link href="/products/new" className={buttonVariants()}>
          create Product
        </Link>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {products.map((product:any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
