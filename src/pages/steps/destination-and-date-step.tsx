import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps{
    isGuestOpen: boolean,
    closeInputGuest: () => void,
    openInputGuest: () => void
}

export function DestinationAndDateStep({
    isGuestOpen,
    closeInputGuest,
    openInputGuest
}: DestinationAndDateStepProps
){
    return(
        <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">

        <div className='flex items-center gap-2 flex-1'>
          <MapPin className=' size-5 text-zinc-400'/>
          <input  disabled={isGuestOpen} className="bg-transparent text-lg text-zinc-200 placeholder-zinc-400 outline-none flex-1" placeholder="Para onde você vai" type="text" />
        </div>

        <div className='flex items-center gap-2 flex-1'>
          <Calendar className=' size-5 text-zinc-400'/>
          <input disabled={isGuestOpen}  className="bg-transparent text-lg text-zinc-200 placeholder-zinc-400 w-40 outline-none flex-1" placeholder="Quando?" type="text" />
        </div>

        <div className='w-px h-6 bg-zinc-800'></div>

        {isGuestOpen ?
         <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'
         onClick={closeInputGuest}
       >
         Alterar local/data
         <Settings2 className='size-5'/>
       </button>
        :
        <button className='bg-lime-300 text-zinc-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'
          onClick={openInputGuest}>
          Continuar
          <ArrowRight className='size-5'/>
        </button>
        }
    </div>
    )
}