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
        <div className="">
          <Image
            src="/top.svg"
            alt="programming club"
            width={147}
            height={30}
          />
        </div>
        <div className="my-10">
          <Image
            src="/solink.svg"
            alt="solink logomark"
            width={247}
            height={100}
          />
        </div>

        <div className="flex flex-col space-y-10">
          <button
            type="button"
            className="border-1 border-white-200/80 rounded-3xl px-44 py-3 bg-gradient-to-r from-[#071F64]/0 via-[#4B6497]/44 to-[#A4BEDA]/100 mb-8"
            onClick={goToMemberPage}>
            전체
          </button>
          
          <button 
            className="border-1 border-white-200/80 rounded-3xl px-44 py-3 bg-gradient-to-r from-[#071F64]/0 via-[#4B6497]/44 to-[#A4BEDA]/100 mb-8"
            onClick={goToPmPage}>
            기획
          </button>
          
          <button
            className="border-1 border-white-200/80 rounded-3xl px-40 py-3 bg-gradient-to-r from-[#071F64]/0 via-[#4B6497]/44 to-[#A4BEDA]/100 mb-8"
            onClick={goToDesignPage}>
            디자인
          </button>
          
          <button
            className="border-1 border-white-200/80 rounded-3xl px-40 py-3 bg-gradient-to-r from-[#071F64]/0 via-[#4B6497]/44 to-[#A4BEDA]/100 mb-8"
            onClick={goToDevelopPage}>
            개발
          </button>
        </div>

        <div className="whitespace-pre text-xs text-center text-[#767676]">
          <div>
            솔룩스는 숙명여자대학교의 유일무이한 프로그래밍 중앙동아리입니다.
          </div>
          <div>
            소프트웨어 관련 전공 뿐만 아니라 다양한 전공의 학생들이 만나 서비스 개발 프로젝트를 진행하고 있습니다.
          </div>
          <div>
            실제 배포를 목적으로 하며 기획, 디자인, 개발 팀의 협업을 통해 게임, 웹, 앱의 결과물을 만들어 냅니다.
          </div>
        </div>
      </main> 
    </div>
  );
}