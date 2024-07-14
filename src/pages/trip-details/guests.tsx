import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useState } from "react";

interface Participant{
    id: string
    name: string | null
    email: string
    is_confirmed:boolean
}
export  function Guests(){
    const {tripId} = useParams()
    const [participants, setParticipants] = useState<Participant[]>([])


    // fazer a requsição direto na função, não é tão recomendado pois provoca uma nova renderização do componente.Por isso usamos o useefect

    useEffect(()=> {
        api.get(`/trips/${tripId}/participants`)
            .then(response => setParticipants(response.data.participants))
    },[{tripId}])
    return(
        <div className="space-y-6">
        <h2 className="font-semibold text-xl text-zinc-200">Convidados</h2>
        <div className="space-y-5">

            {participants.map((participants, index) => {
                return(
                    <div key={participants.id} className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">{ participants.name ?? `Convidado ${index}`}</span>
                        <span className="block text-sm text-zinc-400 truncate">{ participants.email }</span>
                    </div>
                    {participants.is_confirmed ? (
                        <CheckCircle2 className="size-5 text-green-500 shrink-0" />
                        ) : (
                        <CircleDashed className="size-5 text-zinc-400 shrink-0" />
                    )}

                </div>
                )
            })}

        </div>
        <button className="bg-zinc-800 text-zinc-200 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
            Gerenciar convidados
            <UserCog className="size-5"/>
        </button>
    </div>
    )
}