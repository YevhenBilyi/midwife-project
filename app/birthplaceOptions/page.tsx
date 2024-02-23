'use client'

import Link from 'next/link';
import useStore from "@/store/store";

export default function BirthplaceOptions() {
    const setInitialPage = useStore(state => state.setInitialPage);

    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h1>Birthplace options</h1>
            <button onClick={()=>setInitialPage("birthCenters")}>
                <Link href="/birthCenters">
                Go to birth centers
                </Link>
            </button>
            <button onClick={()=>setInitialPage("homeBirths")}>
                <Link href="/homeBirths">
                Go to home home births
                </Link>
            </button>
            <button onClick={()=>setInitialPage("hospitalBirths")}>
                <Link href="/hospitalBirths">
                Go to hospital births
                </Link>
            </button>
        </div>
    </main>
  );
}