import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function AboutMe() {
    return (
        <div className="flex justify-center w-screen h-screen font-thin">
            <div className="w-1/2 flex-col justify-evenly p-11 pt-32">
                <div className="w-full border border-mainColor rounded-md p-6 mb-5 shadow-second shadow-mainColor">
                    <h1 className="py-2 text-end mb-4">
                        <span className="border border-mainColor italic font-semibold px-3 text-mainColor">
                            Full Stack Developer
                        </span>
                    </h1>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptates quam aspernatur, dolores atque ea cum
                        veniam neque tempore maxime. In non voluptatum iure sit,
                        eius praesentium natus distinctio voluptas quae aliquid
                        soluta delectus eum adipisci quibusdam ipsa vero
                        cupiditate quasi!
                    </p>
                </div>
                <div className="w-full border border-mainColor rounded-md shadow-second shadow-mainColor p-6 text-sm">
                    <div className=" flex justify-evenly items-center w-full flex-row-reverse">
                        <div className="w-1/2 pl-5">
                            <div className="w-full mb-2">
                                <a href="tel:+5491124897939">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="w-4 inline text-mainColor"
                                    />
                                    &nbsp;&nbsp;Teléfono
                                </a>
                            </div>
                            <div className="w-full mb-2">
                                <a href="mailto:adriana141293@gmail.com">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="w-4 inline  text-mainColor"
                                    />
                                    &nbsp;&nbsp;Correo Electrónico
                                </a>
                            </div>
                            <div className="w-full mb-2">
                                <a href="https://www.linkedin.com/in/adriana-paola-cuellar-petit/">
                                    <FontAwesomeIcon
                                        icon={faLinkedinIn}
                                        className="w-4 inline  text-mainColor"
                                    />
                                    &nbsp;&nbsp;LinkedIn
                                </a>
                            </div>
                            <div className="w-full mb-2">
                                <a href="https://github.com/cuellaradriana">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="w-4 inline  text-mainColor"
                                    />
                                    &nbsp;&nbsp;GitHub
                                </a>
                            </div>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <Image
                                src="/contact.svg"
                                alt="Icono de Mensaje"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex flex-wrap justify-evenly mr-11 my-32 border border-mainColor rounded-md shadow-second shadow-mainColor p-6 text-sm">
                <div>
                    <Image
                        src="/ts.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/nestjs.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/js.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/nextjs.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/nodejs.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/mongodb.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/postgresql.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/express.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/react.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/redux.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/jest.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/jasmine.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <Image
                        src="/docker.svg"
                        alt="Icono de Mensaje"
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
}
