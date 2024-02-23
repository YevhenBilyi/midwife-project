import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <h1>WelcomePage</h1>
      <Link href="/birthplaceOptions">
        <button>Go to Page 2</button>
      </Link>
    </div>
    </main>
  );
}
