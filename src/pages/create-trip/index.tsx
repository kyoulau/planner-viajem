import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModel } from './invite-guests-modal'
import { ConfirmmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from '../steps/destination-and-date-step'
import { InviteGuests } from '../steps/invite-guest-step'

export default function CreateTripPage() {
  const [isGuestOpen, setIsGuestOpen] = useState(false)
  const [ isGuestsModalOpen,setIsGuestsModalOpen] = useState(false)
  const [emailsAdd, setEmailAdd] = useState([
    'diego@rocketseat.com.br',
    'john@acme.com'
  ])
  const [isConfirmTripModalOpen,setIsConfirmTripModalOpen] = useState(false)

  function openInputGuest(){
    setIsGuestOpen(true)
  }

  function closeInputGuest(){
    setIsGuestOpen(false)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }
  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function openIsConfirmTripModalOpen(){
    setIsConfirmTripModalOpen(true)
  }

  function closeIsConfirmTripModalOpen(){
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvate(event: FormEvent<HTMLFormElement>){
    // Formulário com parametro algum evento do tipo htmlformelement
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if(!email){
      return
    }

    if(emailsAdd.includes(email)){
      return
    }

    setEmailAdd([
      ...emailsAdd,
      email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsAdd.filter(email => email !== emailToRemove)
    setEmailAdd(newEmailList)
    // salva todos os emails menos os que quero excluir
  }

const navigate = useNavigate()
// Navegação com useNavitage do próprio react que redireciona para outra rota
  function redirectToTripDetail(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    navigate("/trips/123")

  }
  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <div className='flex flex-col items-center gap-1'>
            <img src="/logo.svg" alt="plann.er" />
          </div>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>

          <div className='space-y-4'>

            <DestinationAndDateStep 
              closeInputGuest={closeInputGuest}
              isGuestOpen={isGuestOpen}
              openInputGuest={openInputGuest}
            />

          {isGuestOpen && (
            <InviteGuests 
              emailsAdd={emailsAdd}
              openGuestsModal={openGuestsModal}
              openIsConfirmTripModalOpen={openIsConfirmTripModalOpen}
            />
          )}
        </div>

          <p className=" text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <span className="text-zinc-300 underline">termos de uso</span> e <span className="text-zinc-300 underline">políticas de privacidade</span></p>
      </div>

      {isGuestsModalOpen &&(
        <InviteGuestsModel 
          emailsAdd={emailsAdd}
          addNewEmailToInvate={addNewEmailToInvate}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {isConfirmTripModalOpen &&(
        <ConfirmmTripModal 
          closeIsConfirmTripModalOpen={closeIsConfirmTripModalOpen}
          redirectToTripDetail={redirectToTripDetail}
        />
      )}

    </div>
  )
}

// tailwind usa medidas relativas multiplos de 4