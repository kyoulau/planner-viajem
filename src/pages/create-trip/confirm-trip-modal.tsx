import { Mail, User, X } from "lucide-react"
import { FormEvent } from "react"

interface ConfirmmTripModalProps{
    closeIsConfirmTripModalOpen: () => void
    redirectToTripDetail: (event: FormEvent<HTMLFormElement>) => void
    setOwnerName: (name: string) => void
    setOwnerEmail: (email: string) => void
    // Passa a função e o parametro que elas recebem

}
export function ConfirmmTripModal({
    closeIsConfirmTripModalOpen,
    redirectToTripDetail,
    setOwnerName,
    setOwnerEmail
}: ConfirmmTripModalProps){
    return(
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
        <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
          <div className='space-y-2'>

          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold text-zinc-100'>Confirmar criação da viagem</h2>
            <button type='button' onClick={closeIsConfirmTripModalOpen}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>

          <p className='text-sm text-zinc-400'>Para concluir a criação da viagem para <span className='text-zinc-100 font-semibold'>Florianópolis, Brasil </span> nas datas de <span className='text-zinc-100 font-semibold'>16 a 27 de Agosto de 2024 </span>preencha seus dados abaixo:</p>
          </div>

          <form onSubmit={redirectToTripDetail} className='flex flex-col gap-3'>
            <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
              <User className="text-zinc-400 size-5"/>
              <input
                  type="text"
                  name="nome"
                  onChange={event => setOwnerName(event.target.value)}
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-300"
                />
            </div>
            <div className=' h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                <Mail className="text-zinc-400 size-5"/>
              <input
                  type="text"
                  name="email"
                  onChange={event => setOwnerEmail(event.target.value)}
                  placeholder="Seu e-mail pessoal"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-zinc-300"
                />
              </div>

              <button type='submit' className="bg-lime-300 w-full text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 justify-center">
                  Confirmar criação da viagem
              </button>

          </form>

        </div>
    </div>
    )
}