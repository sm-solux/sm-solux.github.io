"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

const StarterPage = () => {
  const router = useRouter();
  
  const clickCurriculmn = () => {
    window.open("https://imminent-canoe-b7e.notion.site/195af1089d6a80ddaea4e2b87db38104?pvs=4");
  };

  const clickLecture = () => {
    window.open("https://imminent-canoe-b7e.notion.site/193af1089d6a80f6ab5fc0b38ce12ff6?pvs=4");
  };

  const clickAssignment = () => {
    window.open("https://imminent-canoe-b7e.notion.site/1b1af1089d6a8038af02e632e50ee6cf?pvs=4");
  };

  const clickRule = () => {
    window.open("https://imminent-canoe-b7e.notion.site/1b1af1089d6a80b38d85f6097b18f7ca?pvs=4");
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
            스타터
          </div>
          <Image
            src="/line.svg"
            alt="line"
            width={2}
            height={60}
            className="rotate-90"
          />
        </div>

        <div className="flex flex-col space-y-5 md:text-[0.9rem] text-[0.8rem] mt-5">
          <button
            type="button"
            className="border border-white/80 rounded-4xl px-34 md:px-46 py-3.5 relative mb-5 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickCurriculmn}>
            커리큘럼
          </button>
          
          <button 
            className="border border-white/80 rounded-4xl px-34 md:px-46 py-3.5 relative mb-5 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickLecture}>
            강의 안내
          </button>

          <button 
            className="border border-white/80 rounded-4xl px-34 md:px-46 py-3.5 relative mb-5 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickAssignment}>
            과제 안내
          </button>

          <button 
            className="border border-white/80 rounded-4xl px-34 md:px-46 py-3.5 relative mb-5 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickRule}>
            규칙
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

export default StarterPage;