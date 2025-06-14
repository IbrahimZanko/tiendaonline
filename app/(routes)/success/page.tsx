"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";


const PageSuccess = () => {
    const router = useRouter()

    return ( 
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
        <div className="flex justify-center md:min-w-[400px]">
            <Image src="/success.jpg" alt="success" width={250} height={500} className="rounded-lg" />
        </div>

        <div>
            <h1 className="text-3xl">¡Gracias por tu compra!</h1>
            <p className="my-3">¡Gracias por tu compra! Has adquirido una herramienta de calidad diseñada para ofrecerte el mejor rendimiento en cada proyecto. ¡Esperamos que disfrutes tu nueva herramienta y que te ayude a lograr grandes resultados!
            </p>
            <p className="my-3">Nuestro equipo trabaja constantemente para brindarte productos duraderos, precisos y confiables.</p>
            <p className="my-3">¡Disfruta de tu/s producto/s</p>

            <Button onClick={() => router.push("/")} className="cursor-pointer">Volver a la tienda</Button>
        </div>
            </div>
        </div>
    );
}

export default PageSuccess;