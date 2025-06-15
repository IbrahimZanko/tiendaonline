

import { Button } from "@/components/ui/button";
import ProductImageMiniature from "@/components/ui/shared/product-image-miniature";
import ProductMaterialOrigin from "@/components/ui/shared/product-material-origin";
import { useCart } from "@/hooks/use-cart";
import { UseLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface LovedItemProductProps {
    product: ProductType
}

const LovedItemProduct = (props: LovedItemProductProps) => {
    const { product } = props
    const { removeLovedItem } = UseLovedProducts()
    const { addItem } = useCart()


    const addToCheckout = () => {
        addItem(product)
        removeLovedItem(product.id)
    }

    return ( 
        <li className="flex py-6 border-b">

            <ProductImageMiniature url={product.attributes.images.data[0].attributes.url} slug={product.attributes.slug} />

            <div className="flex justify-between flex-1 px-6">
                <div>
                    <h2 className="text-lg font-bold">
                        {product.attributes.productName}
                    </h2>
                    <p className="font-bold">
                        {formatPrice(product.attributes.price)}
                    </p>

                    <ProductMaterialOrigin material={product.attributes.material} origin={product.attributes.origin}/>
                    
                    <Button className="mt-5 rounded-full" onClick={addToCheckout}>Añadir al carrito</Button>
                </div>
                <div>
                    <button className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition")}>
                        <X size={20} onClick={ () => removeLovedItem(product.id)} />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default LovedItemProduct;