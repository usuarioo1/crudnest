import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { getProducts } from "./products/products.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <div className="grid grid-cols-4 gap-3">
        {products.map((product) => (
          <Card>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            
            <CardContent>
            <p>{product.description}</p>
            </CardContent>
            <Button>Comprar</Button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default HomePage;
