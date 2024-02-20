import Link from "next/link";

type TLink = {
    label: string,
    link: string,
}

export default function Navigation () {

    const links: TLink[] = [
        {
            label: 'experience',
            link: '/experience'
        },
        {
            label: 'projects',
            link: '/projects'
        },
        {
            label: 'knowledges',
            link: '/knowledges'
        },
    ]

    return (
        <nav className="text-white bg-black py-2 lg:pl-3 px-2 ">
            <ul className="flex gap-4 w-full">
                {links.map(({label, link}: TLink, idx: number) => 
                        (<li key={idx} className=" hover:text-yellow-300">
                            <Link href={link}>{label}</Link>
                        </li>)
                    )
                }
            </ul>
        </nav>
    )

}