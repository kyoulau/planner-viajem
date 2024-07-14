import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { format } from "date-fns";

interface Trip{
    id: string
    destination: string
    starts_at: string
    ends_at: string
    is_confirmed: boolean
    // parametros que ele espera
}

export function DestinationAndDate(){
    const {tripId} = useParams()
    const [trip, setTrip] = useState<Trip | undefined>()
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    // fazer a requsição direto na função, não é tão recomendado pois provoca uma nova renderização do componente.Por isso usamos o useefect

    useEffect(()=> {
        setIsLoading(true);
        api.get(`/trips/${tripId}`)
            .then(response => setTrip(response.data.trip))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    },[{tripId}])

    
    const displayedDate = trip && format(trip.starts_at,"d").concat(' de ').concat(format(trip.starts_at, " LLL ")).concat(' até ').concat(format(trip.ends_at, "d").concat(' de ').concat(format(trip.ends_at, "LLL")))

    return(
        <div className="px-4 flex items-center h-16 rounded-xl bg-zinc-900 shadow-shape justify-between">
        <div className="flex items-center gap-2">
            <MapPin  className="size-5 text-zinc-400"/>
            <span className="text-zinc-100">{trip?.destination}</span>
        </div>

        <div className="flex gap-5 items-center">

            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <span className="text-zinc-100">{displayedDate}</span>
            </div>

              <div className='w-px h-6 bg-zinc-800'></div>

            <Button variant="secondary">
                Alterar local/data
                <Settings2  className="size-5"/>
            </Button>

        </div>
    </div>
    )
}