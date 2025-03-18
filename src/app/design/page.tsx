"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

const DesignPage = () => {
  const router = useRouter();
  
  const clickCurriculmn = () => {
    window.open("https://vast-glider-d96.notion.site/solux-002?pvs=4");
  };

  const clickWarning = () => {
    window.open("https://vast-glider-d96.notion.site/1b453a1638008062b97de6e7af4b0144?pvs=4");
  };

  const clickBack = () => {
    router.back();
  }

  return(
    <div className="h-screen w-screen relative">
      <Image
        className="object-cover"
        src="/background.png"
        fill
        alt="solink background"
      />

      <main className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <Image
          src="/solux.svg"
          alt="solux logo"
          width={73}
          height={24}
        />
        <div className="flex flex-row align-center items-center my-3 mb-10">
          <Image
            src="/line.svg"
            alt="line"
            width={2}
            height={60}
            className="rotate-270"
          />
          <div className="text-[2rem] font-bold text-center px-12">
            디자인
          </div>
          <Image
            src="/line.svg"
            alt="line"
            width={2}
            height={60}
            className="rotate-90"
          />
        </div>

        <div className="flex flex-col space-y-5 md:text-[0.9rem] text-[0.8rem]">
          <button
            type="button"
            className="md:w-[450px] w-[300px] h-12 border border-white/80 rounded-4xl relative mb-4 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickCurriculmn}>
            커리큘럼
          </button>
          
          <button 
            className="md:w-[450px] w-[300px] h-12 border border-white/80 rounded-4xl relative mb-4 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickWarning}>
            주의사항
          </button>
        </div>
      </main> 
      <div className="absolute bottom-10 left-10" onClick={clickBack}>
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={15}
          height={5}
        />
      </div>
    </div>
  );
};

export default DesignPage;