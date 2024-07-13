import { Link2, Plus } from "lucide-react";

export function ImportantLinks(){
    return(
        <div className="space-y-6">
        <h2 className="font-semibold text-xl text-zinc-200">Links importantes</h2>
        <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                    <a className="block text-sm text-zinc-400 truncate">https://www.airbnb.com.br/rooms/10470001100000000000000000000000000000</a>
                </div>
                <Link2 className="size-5 text-zinc-400 shrink-0"/>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                    <a className="block text-sm text-zinc-400 truncate">https://www.airbnb.com.br/rooms/10470001100000000000000000000000000000</a>
                </div>
                <Link2 className="size-5 text-zinc-400 shrink-0"/>
            </div>

        </div>
        <button className="bg-zinc-800 text-zinc-200 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Cadastrar novo link
            <Plus className="size-5"/>
        </button>
    </div>
    )
}