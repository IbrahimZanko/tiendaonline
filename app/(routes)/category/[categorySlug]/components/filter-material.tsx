import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { FilterTypes, ResultFilterTypes } from "@/types/filters";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type FilterMaterialProps = {
    setFilterMaterial: (material: string) => void
}

const FilterMaterial = (props: FilterMaterialProps) => {
    const { setFilterMaterial } = props
    const { result, loading }: FilterTypes = useGetProductField()

    return ( 
        <div className="my-5">
            <p className="mb-3 font-bold">material</p>
            {loading && result == null && (
                <p>Cargando material..</p>
            )}

            <RadioGroup onValueChange={(value) => setFilterMaterial(value)}>
                {result !== null && result.schema.attributes.material.enum.map((material: string) => (
                    <div key={material} className="flex items-center space-x-2">
                        <RadioGroupItem value={material} id={material} />
                        <Label htmlFor={material}>{material}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterMaterial;