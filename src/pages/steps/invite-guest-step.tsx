import { UserRoundPlus } from "lucide-react";


interface InviteGuestsProps{
    openGuestsModal: () => void,
    emailsAdd: string[],
    openIsConfirmTripModalOpen: () => void
}

export function InviteGuests({openGuestsModal, emailsAdd,openIsConfirmTripModalOpen}: InviteGuestsProps){
    return(
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3">
        <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
          <UserRoundPlus className=' size-5 text-zinc-400'/>
          { emailsAdd.length > 0 ?
            <span className='text-zinc-400 text-lg flex-1'>{emailsAdd.length} pessoa(s) adicionadas</span>
          :
            <span className='text-zinc-400 text-lg flex-1'>Quem está na viajem?</span>
          }
        </button>
      <div className='w-px h-6 bg-zinc-800'></div>

    <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'
      onClick={openIsConfirmTripModalOpen}>
      Confirmar viajem
      <UserRoundPlus className='size-5'/>
    </button>
  </div>
    )
}