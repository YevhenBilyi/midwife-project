'use client'

import Image from "next/image";
import Link from 'next/link';
import useStore from "@/store/store";
import { useRouter } from 'next/navigation'

export default function HomeBirths() {

    const initialPage = useStore(state => state.initialPage);
    const router = useRouter()

    const goToNextPage = () => {
        if (initialPage === "birthCenters") {
          router.push('/hospitalBirths')
        }
        else {
            router.push('/birthCenters')
        }
      };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1>Home births</h1>
        <button onClick={goToNextPage}>NEXT</button>
    </div>
    </main>
  );
}
