import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale"; 

interface Activities{
    date: string
    activities: {
        id: string
        title: string
        occurs_at: string
    }[]
}

export function Activities(){

    const {tripId} = useParams()
    const [activities, setActivities] = useState<Activities[]>([])


    // fazer a requsição direto na função, não é tão recomendado pois provoca uma nova renderização do componente.Por isso usamos o useefect

    useEffect(()=> {
        api.get(`/trips/${tripId}/activities`)
            .then(response => setActivities(response.data.activities))
    },[{tripId}])


    return(
        <div className="space-y-8">
            {activities.map(activity =>{
                return(
                <div key={activity.date} className="space-y-2.5">
                    <div className="flex gap-2 items-baseline">
                        <span className="text-xl text-zinc-300 font-semibold">Dia {format(activity.date, 'd')}</span>
                        <span className="text-xs text-zinc-500">{format(activity.date, 'EEE',{locale: ptBR})}</span>
                    </div>
        
                    <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data</p>
                </div>
                )
            })}
        <div className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                <span className="text-xs text-zinc-500">Sábado</span>
            </div>

            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data</p>
        </div>

        <div className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                <span className="text-xs text-zinc-500">Domingo</span>
            </div>

            <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <span className=" text-zinc-100">Corrida de Kart</span>
                    <span className="text-zinc-200 text-sm ml-auto">07:00h</span>
                </div>
            </div>

            <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <span className=" text-zinc-100">Academia em grupo</span>
                    <span className="text-zinc-200 text-sm ml-auto">08:00h</span>
                </div>
            </div>

        </div>

        <div className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 19</span>
                <span className="text-xs text-zinc-500">Domingo</span>
            </div>

            <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <span className=" text-zinc-100">Almoço</span>
                    <span className="text-zinc-200 text-sm ml-auto">12:00h</span>
                </div>
            </div>

            <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <span className=" text-zinc-100">Gaming session</span>
                    <span className="text-zinc-200 text-sm ml-auto">18:00h</span>
                </div>
            </div>

            <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300"/>
                    <span className=" text-zinc-100">Jantar</span>
                    <span className="text-zinc-200 text-sm ml-auto">20:00h</span>
                </div>
            </div>
        </div>
    </div>
    )
}