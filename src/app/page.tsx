"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const goToMemberPage = () => {
    router.push('/member');
  };

  const goToPmPage = () => {
    router.push('/pm');
  };

  const goToDesignPage = () => {
    router.push('/design');
  };

  const goToDevelopPage = () => {
    router.push('/develop');
  };
  
  return (
    <div className="h-screen w-screen relative">
      <Image
        className="object-cover"
        src="/background.png"
        fill
        alt="solink background"
      />

      <main className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="mb-10">
          <Image
            src="/solink.svg"
            alt="solink logomark"
            width={347}
            height={200}
          />
        </div>

        <div className="flex flex-col space-y-10">
          <button
            type="button"
            className="border-2 border-gray-500/80 rounded-3xl px-36 py-2"
            onClick={goToMemberPage}>
            전체
          </button>
          
          <button 
            className="border-2 border-gray-500/80 rounded-3xl px-36 py-2"
            onClick={goToPmPage}>
            기획
          </button>
          
          <button
            className="border-2 border-gray-500/80 rounded-3xl px-36 py-2"
            onClick={goToDesignPage}>
            디자인
          </button>
          
          <button
            className="border-2 border-gray-500/80 rounded-3xl px-36 py-2"
            onClick={goToDevelopPage}>
            개발
          </button>
        </div>
      </main> 
    </div>
  );
}