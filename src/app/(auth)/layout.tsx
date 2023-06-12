import Image from 'next/image'
import image from '../Image/banner.png'
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className=" h-screen flex">
        <div className="w-full content-center md:w-3/4 lg:w-1/2 h-full">
          <div className="font-bold m-5">Your Logo</div>
          <div className="mt-10 w-3/4 lg:w-1/2 mx-auto my-5 flex items-center justify-center h-4/5">
            <div className="w-full">{children}</div>
          </div>
        </div>
        <div className="hidden md:block bg-[#000842] w-1/2 m-8 rounded-2xl">
          <Image className="mx-auto hover:scale-110 transition-all" src={image} alt="banner" />
        </div>
      </div>
    </section>
  )
}
