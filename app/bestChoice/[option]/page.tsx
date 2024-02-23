'use client'

import Image from "next/image";
import Link from 'next/link';
import useStore from "@/store/store";

interface PageProps {
    params: {
        option: number;
    };
}

const Page: React.FC<PageProps> = ({params}) => {
    
        // Define content for each option
        const contentMap = {
            1: {
                title: 'Option 1 Title',
                description: 'Description for Option 1',
            },
            2: {
                title: 'Option 2 Title',
                description: 'Description for Option 2',
            },
            3: {
                title: 'Option 3 Title',
                description: 'Description for Option 3',
            },
            0: {
                title: 'Default Option Title',
                description: 'Description for Default Option',
            },
        };
    
        // Fallback content if the option is not defined
        const defaultContent = {
            title: 'Not Found',
            description: 'The requested option does not exist.',
        };
    
        // Determine which content to display
        const { title, description } = contentMap[params.option as keyof typeof contentMap] || defaultContent;
    
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link href="/nextSteps">
                        What is next?
                    </Link>
                </div>
            </main>
        );
};

export default Page;
