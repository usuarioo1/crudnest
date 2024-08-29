import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function ProductsNewPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
            <CardTitle>
                Create Product
            </CardTitle>
        </CardHeader>
        <CardContent>
            <form action="">
                <Label>
                    Product Name
                </Label>
                <Input />
                <Label>
                    Description
                </Label>
                <Input />
                <Label>
                    Price
                </Label>
                <Input />
                <Label>
                        Image
                </Label>
                <Input />
                <Button>Create Product</Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductsNewPage
