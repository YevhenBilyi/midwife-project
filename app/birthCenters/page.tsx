'use client'

import Image from "next/image";
import Link from 'next/link';
import useStore from "@/store/store";
import { useRouter } from 'next/navigation'

export default function BirthCenters() {
    const initialPage = useStore(state => state.initialPage);
    const router = useRouter()


    const goToNextPage = () => {
        if(initialPage === "birthCenters") {
            router.push('/homeBirths')
            }
        else if(initialPage === "homeBirths") {
            router.push('/hospitalBirths')
        }
        else {
            router.push('/decisionGuide')
        }
      };
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1>Birth centers</h1>
      <button onClick={goToNextPage}>NEXT</button>
    </div>
    </main>
  );
}
