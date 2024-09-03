
'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"


export function ProductForm() {
    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

  return (
    <form action="" onSubmit={onSubmit}>
    <Label>
        Product Name
    </Label>
    <Input {...register('name')} />
    <Label>
        Description
    </Label>
    <Input {...register('description')} />
    <Label>
        Price
    </Label>
    <Input {...register('price')} />
    <Label>
            Image
    </Label>
    <Input {...register('image')} />
    <Button>Create Product</Button>
</form>
  )
}
