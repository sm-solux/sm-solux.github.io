"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

const DevelopPage = () => {
  const router = useRouter();

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
            개발
          </div>
          <Image
            src="/line.svg"
            alt="line"
            width={2}
            height={60}
            className="rotate-90"
          />
        </div>

        <div className="whitespace-pre mt-3 md:text-[0.75rem] text-[0.55rem] text-center text-[#767676]">
          <div>
            추가 질문은 @김세희 슬랙 디엠을 통해 받습니다.
          </div>
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

export default DevelopPage;