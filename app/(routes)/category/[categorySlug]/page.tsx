"use client"
import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams } from "next/navigation"
import FiltersControlsCategory from "./components/filters-controls-category"
import SkeletonSchema from "@/components/ui/skeletonScheme"
import ProductCard from "./components/product-card"
import { ProductType } from "@/types/product"
import { useState } from "react"

export default function Page() {
    const params = useParams() 
    const { categorySlug } = params
    const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug as string)

    const [filterMaterial, setFilterMaterial] = useState('')

    
    const filteredProducts = result !== null &&!loading && (
        filterMaterial == '' ? result : result.filter((product: ProductType) => product.attributes.material == filterMaterial)
    )
    

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading && (
                <h1 className="text-3xl font-medium">Herramientas {result[0].attributes.category.data.attributes.categoryName}</h1>
            )}
            <Separator />

            <div className="sm:flex justify-between">
                <FiltersControlsCategory setFilterMaterial={setFilterMaterial} />

                <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
                    {loading && (
                        <SkeletonSchema grid={3}/>
                    )}
                    {filteredProducts !== null && !loading && (
                        filteredProducts.map((product: ProductType) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                    )}
                    {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
                        <p>No hay productos con este filtro.</p>
                    )}
                </div>
            </div>
        </div>
    )
}