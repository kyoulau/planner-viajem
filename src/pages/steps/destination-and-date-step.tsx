import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from 'date-fns';


interface DestinationAndDateStepProps{
    isGuestOpen: boolean,
    closeInputGuest: () => void,
    openInputGuest: () => void,
    setDestination: (destination: string) => void
    // setDestination tem um valor setado que virá como props, que está conenctado com um valor que vem do Pai
    setEventStartAndDate: (dates: DateRange | undefined) => void
    eventStartAndDate: DateRange | undefined
}

export function DestinationAndDateStep({
    isGuestOpen,
    closeInputGuest,
    openInputGuest,
    setDestination,
    setEventStartAndDate,
    eventStartAndDate
}: DestinationAndDateStepProps
){

  // const [eventStartAndDates, setEventStartAndDates] = useState<DateRange | undefined>()
  
  // Data começa como undefined e é um objeto datepicker

  const [isDatePicketOpen, setIsDatePicketOpen] = useState(false)

  function openDatePicket(){
    return setIsDatePicketOpen(true)
  }

  function closeDatePicket(){
    return setIsDatePicketOpen(false)
  }

  const displayedDate = eventStartAndDate && eventStartAndDate.from && eventStartAndDate.to ? 
  format(eventStartAndDate.from, "d").concat(' de ').concat(format(eventStartAndDate.to, ' LLL ')).concat(' até ').concat(format(eventStartAndDate.to, "d" ).concat(' de ').concat(format(eventStartAndDate.to, ' LLL ')))
  : null 
  // Se tiver data de inicio, ele formata pelo dia. O valor pode começar como null
    return(
        <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">

        <div className='flex items-center gap-2 flex-1'>
          <MapPin className=' size-5 text-zinc-400'/>
          <input  disabled={isGuestOpen}
           className="bg-transparent text-lg text-zinc-200 placeholder-zinc-400 outline-none flex-1"
            placeholder="Para onde você vai ?"
             type="text" 
             onChange={event => setDestination(event.target.value)}
            //  ao editar alguma coisa no input, chama a função setDestination passando o valor do iput como parametro
             />
        </div>

        <button disabled={isGuestOpen} onClick={openDatePicket} className='flex items-center gap-2 text-left w-[240px]'>
          <Calendar className=' size-5 text-zinc-400'/>
          <span 
            className=" text-lg text-zinc-200 w-48">
               {displayedDate || "Quando ?"}
            {/* Mostra somente se tiver uma data */}
          </span>
        </button>

      {isDatePicketOpen &&(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
            <div className='space-y-2'>

            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-semibold text-zinc-100'>Selecione a data</h2>
              <button type='button' onClick={closeDatePicket}>
                <X className='size-5 text-zinc-400' />
              </button>
            </div>
            </div>

            <DayPicker className="text-zinc-100" mode="range" selected={eventStartAndDate} onSelect={setEventStartAndDate} />

          </div>
         </div>
      )}

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