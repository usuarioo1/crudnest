import { METHODS } from "http";
import { headers } from "next/headers";
import { cache } from "react";
//se crea este archivo para manejar las peticiones a la api
export async function createProduct(productData: any) {
    const res = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             // Evita que la respuesta se guarde en caché
        },
        body: JSON.stringify(productData),
    });

    const data = await res.json();
    console.log(data);
}

export async function getProducts() {
    const res = await fetch(`http://localhost:4000/api/products/`, {
        cache:'no-store'
    }
        
    );

    return await res.json();
}

export async function deletePproduct(id:string){
   const res=  await fetch(`http://localhost:4000/api/products/${id}`,{
        method:"DELETE",
    }
    );
    return await res.json();
}

export async function getProduct(id:string) {
    const res = await fetch(`http://localhost:4000/api/products/${id}`, {
        // cache:'no-store'
    }
        
    );

    return await res.json();
}

export async function updateProduct(id:string, newProduct:any) {
    const rest = await fetch(`http://localhost:4000/api/products/${id}`,{
        method: "PATCH",
        headers:{
            'Content-Type':'application/json'
        },body:JSON.stringify(newProduct),
        cache:'no-store'
    });
    return await rest.json()
    
}