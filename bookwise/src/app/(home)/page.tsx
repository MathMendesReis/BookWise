import { BookMarked } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="max-w-[1440px]  min-h-[900px] mx-auto grid grid-cols-2 antialiased">
      <aside className="col-span-1 col-start-1 min-[700px]:flex hidden items-center justify-center bg-[url('/bookWise.svg')] m-3 rounded-md">
        <div className="flex items-center justify-center gap-4">
          <BookMarked className="text-[#9694F5] w-12 h-12" />
          <p className="font-nunito-sans font-bold leading-[160%] text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#7FD1CC] to-[#9694F5]">BookWise</p>
        </div>
      </aside>
      <section className="col-span-2 min-[700px]:col-span-1 min-[700px]:col-start-2 col-start-1 flex items-center justify-center">
        <div className="min-[384px]:w-96 min-h-[350px] w-full min-[384px]:px-0 px-4">
          <p className="text-gray-100 text-xl w-full min-h-h-8 font-bold leading-7" >Boas vindas!</p>
          <p className="text-gray-100 text-lg w-full min-h-h-8 font-normal" >Faça seu login ou acesse como visitante.</p>
          <section className=" flex flex-col gap-4 mt-3">
            <button className="flex items-center justify-center gap-4 px-6 py-4 bg-gray-700 w-full rounded-md hover:bg-gray-600 transition-colors">
              <Image src={'/google.svg'} alt="" width={32} height={32}/>
              <span className="text-gray-300 font-semibold leading-snug">Entrar com google</span>
            </button>
            <button className="flex items-center justify-center gap-4 px-6 py-4 bg-gray-700 w-full rounded-md hover:bg-gray-600 transition-colors">
              <Image src={'/github.svg'} alt="" width={32} height={32}/>
              <span className="text-gray-300 font-semibold leading-snug">Entrar com github</span>
            </button>
            <button className="flex items-center justify-center gap-4 px-6 py-4 bg-gray-700 w-full rounded-md hover:bg-gray-600 transition-colors">
              <Image src={'/rocket.svg'} alt="" width={32} height={32}/>
              <span className="text-gray-300 font-semibold leading-snug">acessar como visitante</span>
            </button>
          </section>
        </div>
      </section>
    </main>
    </>
  );
}