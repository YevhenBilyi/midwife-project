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
            0: {
                title: 'Landspítali:',
                description: 'Description for Option 1',
            },
            1: {
                title: 'Sjúkrahúsið á Akureyri',
                description: 'Description for Option 2',
            },
            2: {
                title: 'Heilbrigðisstofnun Vesturlands',
                description: 'Description for Option 3',
            },
            3: {
                title: 'Heilbrigðisstofnun Vestfjarða',
                description: 'Description for Default Option',
            },
            4: {
                title: 'Heilbrigðisstofnun Austurlands',
                description: 'Description for Default Option',
            },
            5: {
                title: 'Heilbriðisstofnun Suðurlands',
                description: 'Description for Default Option',
            },
            6: {
                title: 'Heilbrigðisstofnun Suðurnesja',
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
                    <Link href="/hospitalBirths">
                        Back
                    </Link>
                </div>
            </main>
        );
};

export default Page;
