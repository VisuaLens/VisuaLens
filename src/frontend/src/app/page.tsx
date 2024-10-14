import Image from "next/image";
import bufferingGif from './assets/images/gif/buffering.gif'; // Anpassung des Pfades
import { redirect } from "next/navigation";

const bufferingIf = "https://tenor.com/view/loading-buffering-buffer-load-circle-gif-17796441";

export default function Home() {

    const admin = localStorage.getItem('isAdmin')



  if (localStorage.getItem('isAdmin'))
    

    redirect('/signin')

    return (
        <>
            <div className="flex h-screen justify-center items-center font-serif">
                <Image
                    src={bufferingGif} // Verwende den importierten Pfad
                    width={150}
                    height={150}
                    alt="Loading Buffering GIF" // Alt-Text für Barrierefreiheit
                />
                <h1 className="text-[3rem]">Checking some things</h1>
            </div>
        </>
    );
}
