import { Plus} from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDate } from "./destination-and-date";

export function TripDetailsPage(){

    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)

    function openCreateActivityModal(){
        console.log("clciocu")
        setIsCreateActivityModalOpen(true)
    }

    function closeCreateActivityModal(){
        setIsCreateActivityModalOpen(false)
    }
    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationAndDate/>

            <main className="flex px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold text-zinc-200">Atividades</h2>
                        <button onClick={openCreateActivityModal} className='bg-lime-300 text-zinc-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                        <Plus className="size-5" />
                        Cadastrar atividade
                        </button>
                    </div>

                    <Activities/>
                </div>

                <div className="w-80 space-y-6 mx-5">
                    <ImportantLinks/>
                    <div className="bg-zinc-800 w-full h-px"></div>
                    <Guests/>
                </div>
            </main>

            {isCreateActivityModalOpen &&(
                 <CreateActivityModal
                 closeCreateActivityModal={closeCreateActivityModal}
                 />
            )}

        </div>
    )
}