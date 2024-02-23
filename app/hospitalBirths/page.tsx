'use client'

import Image from "next/image";
import Link from 'next/link';
import useStore from "@/store/store";
import { useRouter } from 'next/navigation'

export default function HospitalBirths() {
    const initialPage = useStore(state => state.initialPage);
    const router = useRouter()

    const goToNextPage = () => {
        if (initialPage === "hospitalBirths") {
            router.push('/homeBirths')
        }
        else {
            router.push('/decisionGuide')
        }
      };
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1>Hospital births</h1>
      <button onClick={goToNextPage}>NEXT</button>
      {Array.from({ length: 7 }, (_, i) => (
        <div key={i}>
          <Link href={`/hospitals/${i}`}>
            Hospital number {i}
          </Link>
        </div>
      ))}
    </div>
    </main>
  );
}
