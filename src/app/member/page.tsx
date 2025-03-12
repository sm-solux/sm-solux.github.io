"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

const MemberPage = () => {
  const router = useRouter();

  const clickOT = () => {
    window.open("https://docs.google.com/spreadsheets/d/1jlFLsQZrUI1lYYj67ccIRt-tUAFXwg78Dj899l--4dc/edit?usp=sharing");
  };
  
  const clickReport = () => {
    window.open("https://docs.google.com/document/d/1GVwkls9_IUJQvXmn9x7OgN5W17KMPkmC/edit?usp=sharing&ouid=116639848871058315460&rtpof=true&sd=true");
  };

  const clickRoom = () => {
    window.open("https://docs.google.com/spreadsheets/d/1jlFLsQZrUI1lYYj67ccIRt-tUAFXwg78Dj899l--4dc/edit?usp=sharing");
  };

  const clickReward = () => {
    window.open("https://docs.google.com/document/d/1FU8SBx_XVFaZyaQFsJL-rdjm9D3bJqEi/edit?usp=sharing&ouid=116639848871058315460&rtpof=true&sd=true");
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
            전체
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
            className="border border-white/80 rounded-4xl px-30 md:px-42 py-3.5 relative mb-5 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickOT}>
            3/14 OT 자료
          </button>

          <button
            type="button"
            className="border border-white/80 rounded-4xl px-30 md:px-42 py-3.5 relative mb-5 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickReward}>
            상벌점제 및 연간계획
          </button>
          
          <button
            type="button"
            className="border border-white/80 rounded-4xl px-30 md:px-42 py-3.5 relative mb-5 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickReport}>
            회의록 양식
          </button>

          <button
            type="button"
            className="border border-white/80 rounded-4xl px-30 md:px-42 py-3.5 relative mb-5 bg-gradient-to-r from-[#071F64]/0 to-[#AAD6D5]/60 text-opacity-100"
            onClick={clickRoom}>
            동아리방 방문 기록
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

export default MemberPage;