import { CircleCheck, CircleDashed, UserCog } from "lucide-react";

export  function Guests(){
    return(
        <div className="space-y-6">
        <h2 className="font-semibold text-xl text-zinc-200">Convidados</h2>
        <div className="space-y-5">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">Laura Santos</span>
                    <span className="block text-sm text-zinc-400 truncate">laurasanots@gmail.com</span>
                </div>
                <CircleDashed className="size-5 text-lime-300 shrink-0"/>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                    <span className="block font-medium text-zinc-100">Dr. Rita Pacocha</span>
                    <a className="block text-sm text-zinc-400 truncate">lacy.stiedemann@gmail.com</a>
                </div>
                <CircleCheck className="size-5 text-lime-300 shrink-0"/>
            </div>

        </div>
        <button className="bg-zinc-800 text-zinc-200 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Gerenciar convidados
            <UserCog className="size-5"/>
        </button>
    </div>
    )
}