import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="w-screen fixed h-[10%]">
            <ul className="flex justify-evenly w-2/3 mx-auto py-8">
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/aboutme">Sobre Mi</Link>
                </li>
                <li>
                    <Link href="/projects">Proyectos</Link>
                </li>
                <li>
                    <Link href="/education">Educación</Link>
                </li>
            </ul>
        </nav>
    );
}
