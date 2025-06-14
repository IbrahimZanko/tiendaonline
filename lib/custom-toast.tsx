// lib/custom-toast.ts
import { toast as sonnerToast } from 'sonner'

type ToastOptions = {
    title: string
    description?: string
    variant?: 'default' | 'destructive'
}

export const toast = ({ title, description, variant = 'default' }: ToastOptions) => {
    const variantClass = variant === 'destructive' ? 'text-red-600' : 'text-green-700'

    sonnerToast(
    <div className={variantClass}>
        <p className="font-semibold">{title}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
)
}
