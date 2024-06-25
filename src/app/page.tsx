import Button from '@/components/Button/Button';
import Image from 'next/image';
import { montserrat_alt } from './layout';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from '@/components/Login/Login';

export default function Home() {
    const GOOGLE_CLIENT_ID: string = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <div className="flex items-center justify-center w-screen h-screen font-thin">
                <div className="w-1/2 p-24 pr-11">
                    <h2 className="text-3xl font-light">
                        ¡Hola! Soy&nbsp;
                        <span
                            className={`${montserrat_alt.className} text-mainColor font-bold`}
                        >
                            Adriana Cuellar
                        </span>
                    </h2>
                    <h1 className="py-2">
                        <span className="bg-mainColor italic font-semibold px-3 text-dark rounded-xl">
                            Full Stack Developer
                        </span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam corporis distinctio consectetur neque repellendus
                        maiores expedita, sint consequuntur quidem mollitia?
                    </p>
                    <div className="flex w-2/3 mx-auto justify-evenly pt-11 pr-24">
                        <Button type="button" id="aboutMe">
                            Más sobre mi
                        </Button>
                        <Button type="button" id="contactToMe">
                            Mis Proyectos
                        </Button>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="w-2/3 mx-auto ">
                        <Image
                            src="/avatar.png"
                            alt="avatar"
                            width={500}
                            height={300}
                            className="rounded-full shadow-main shadow-mainColor"
                        />
                    </div>
                </div>
                <Login />
            </div>
        </GoogleOAuthProvider>
    );
}
