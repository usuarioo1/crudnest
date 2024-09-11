import { cache } from "react";

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
    const res = await fetch('http://localhost:4000/api/products', {
        cache:'no-store'
    }
        
    );

    return await res.json();
}
