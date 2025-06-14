

interface ProductMaterialOrigin {
    material: string,
    origin: string
}

const ProductMaterialOrigin = (props: ProductMaterialOrigin) => {
    const { material, origin } = props


    return ( 
                            <div className="flex items-center justify-between gap-3">
                                <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                                    {material}
                                </p>
                                <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">
                                    {origin}
                                </p>
                            </div>
    );
}

export default ProductMaterialOrigin;