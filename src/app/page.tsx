import Image from "next/image";
import LeftSide from "@/components/LeftSide";

// main = display: flex, min-height: 100vh, flex-direction: column, align-items: center, padding-top: 24px,
// padding-bottom: 24px, padding-left: 6px, padding-right: 6px, @media (min-width: 1024px){padding-left: 24px, padding-right: 24px}

// div = z-index: 5, width: 100% (includes the padding from main), max-width: 64rem, font-family: ... (multiple)
// font-size: 0.875rem (14px), line-height: 1.25rem (20px), display: flex, flex-direction: column,
// @media (min-width: 1024px){flex-direction: row}, justify-content: space-between

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
      <div className="z-5 w-full max-w-5xl font-sans text-sm flex flex-col lg:flex-row justify-between ">
        <LeftSide></LeftSide>
        <div className="lg:pl-[20%]">
          {/* <p> */}
          Column two will include about me, experience, education, projects
          {/* </p> */}
        </div>
      </div>
    </main>
  );
}
