import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceBlockProps {
    id?: number;
    title: string;
    description: string;
    image: {
        imageSrc: string;
        width: number;
        height: number;
    };
    userCase: Omit<ServiceBlockProps, "userCase"> & {
        type: string;
        testimonial: {
            review: string;
            position: string;
            company: string;
        };
    };
}

const WEB_IMAGE_DIMENSIONS = { width: 500, height: 288 };
const MOBILE_IMAGE_DIMENSIONS = { width: 208, height: 424 };

const ServicesData: ServiceBlockProps[] = [
    {
        id: 1,
        title: "Web Development",
        description:
            "If you are considering venturing into web app development services, you can have complete confidence in our ability to provide comprehensive assistance throughout the entire process, from the initial concept to final launch.",
        image: {
            imageSrc: "/images/services/e-commerce-headphone.png",
            width: WEB_IMAGE_DIMENSIONS.width,
            height: WEB_IMAGE_DIMENSIONS.height
        },
        userCase: {
            id: 1,
            title: "Properties Management System Developed For A Malaysian Building Company",
            description:
                "The software application handles operations of hospitality accommodations and commercial residential rental properties.",
            image: {
                imageSrc: "/images/services/real_estate_web.png",
                width: WEB_IMAGE_DIMENSIONS.width,
                height: WEB_IMAGE_DIMENSIONS.height
            },
            type: "Web Case",
            testimonial: {
                review: "Brainhub Labs expertise drove our innovative project, providing a robust platform for musicians and producers to utilize data seamlessly. Their technical prowess is showcased in excellent web and mobile application development. The team was transparent, kept ongoing communication, and were flexible to changes",
                position: "CEO",
                company: "Real Estate Enterprise"
            }
        }
    }
];

const ServiceBlock: FC<ServiceBlockProps> = ({
    title,
    description,
    userCase,
    image
}) => {
    return (
        <div className="flex h-full w-full flex-col py-36">
            <div className="mb-24 flex w-full flex-col-reverse md:mb-48 md:flex-row">
                {/* Image Column */}

                <div className="flex w-full flex-col justify-center">
                    <div className="flex">
                        <Image
                            src={image.imageSrc}
                            alt="coffee shop image"
                            width={image.width}
                            height={image.height}
                        />
                    </div>
                </div>

                {/* Text Column */}

                <div className="flex w-full flex-col items-center md:items-start">
                    <p className="mb-4 text-center text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:mb-8 md:text-left md:text-5xl md:leading-tight">
                        {title}
                    </p>

                    <p className=" mb-12 text-center text-base !leading-relaxed text-white sm:text-lg md:text-left md:text-xl">
                        {description}
                    </p>
                </div>
            </div>

            <div className="mb-12 flex w-full flex-col md:flex-row">
                {/* Text Column */}

                <div className="flex w-full flex-col items-center md:items-start">
                    <p className="mb-2 text-center text-xs font-bold  text-primary md:text-left">
                        {userCase.type}
                    </p>
                    <p className="mb-4 text-center text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:mb-8 md:text-left md:text-5xl md:leading-tight">
                        {userCase.title}
                    </p>

                    <p className=" mb-12 text-center text-base !leading-relaxed text-white sm:text-lg md:text-left md:text-xl">
                        {userCase.description}
                    </p>
                </div>

                {/* Image Column */}

                <div className="flex w-full flex-col">
                    <div className="flex flex-row justify-end">
                        <Image
                            src={userCase.image.imageSrc}
                            alt="coffee shop image"
                            width={userCase.image.width}
                            height={userCase.image.height}
                        />
                    </div>
                </div>
            </div>

            <div className="relative mb-12  flex flex-col items-center">
                <p className="mb-16 text-center text-lg  font-bold text-primary md:text-left">
                    What they say about us
                </p>
                <p className=" mb-12 w-4/5 text-center text-base !leading-relaxed text-white sm:text-lg md:text-left md:text-xl">
                    {userCase.testimonial.review}
                </p>
                <p className="mb-2 text-center text-lg  font-bold text-primary md:text-left">
                    <strong>
                        {userCase.testimonial.position},{" "}
                        {userCase.testimonial.company}
                    </strong>
                </p>
                <div className="absolute left-0 top-0 h-24 w-24">
                    <Image src="/images/quotes.svg" alt="about-image" fill />
                </div>
                <div className="absolute bottom-0 right-0 h-24 w-24">
                    <Image
                        src="/images/quotes.svg"
                        alt="about-image"
                        fill
                        className="rotate-180"
                    />
                </div>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <>
            <section id="services" className="py-16 md:py-20 lg:py-28">
                <div className="flex w-full justify-center">
                    <p className="mb-4 text-center text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight md:mb-8 md:text-left md:text-5xl md:leading-tight">
                        What We Do
                    </p>
                </div>

                <div className="container">
                    {ServicesData.map((service) => (
                        <ServiceBlock
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            userCase={service.userCase}
                        />
                    ))}
                </div>

                <div className="flex w-full flex-col ">
                    <div className="flex w-full justify-center">
                        <p className="mb-4 text-center text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight md:mb-8 md:text-left md:text-5xl md:leading-tight">
                            Technologies For Software Development
                        </p>
                    </div>
                </div>

                <div className="container flex w-full flex-col">
                    <div className="mb-12 flex w-full justify-center md:mb-24">
                        <p className="mb-4 text-center text-3xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight md:mb-8 md:text-left md:text-5xl md:leading-tight">
                            Prices
                        </p>
                    </div>
                    <div className="mb-36 flex w-full flex-col justify-between md:flex-row">
                        <p className="mb-12 w-full text-center text-3xl font-bold leading-tight text-primary  sm:leading-tight md:mb-8 md:flex  md:flex-col md:justify-center md:text-left md:leading-tight">
                            TIME AND MATERIALS MODEL
                        </p>

                        <p className="mb-4 w-full text-center text-xl leading-tight sm:leading-tight md:mb-8  md:text-left md:leading-tight">
                            We believe this is the clearest and simplest
                            concept. Using time tracking, we only bill for the
                            time actually worked, so it is easy to manage the
                            budget. For tracking time we use softwares like{" "}
                            <strong className="text-primary">Clockify</strong>,{" "}
                            <strong className="text-primary">Toptracker</strong>
                            ,{" "}
                            <strong className="text-primary">Workfolio</strong>,
                            Our rates are:
                        </p>
                    </div>

                    <div className="flex w-full flex-col  md:flex-row">
                        <div className="mb-24 flex  flex-col md:mr-24">
                            <p className="mb-2 w-full text-center text-4xl font-bold leading-tight text-primary  sm:leading-tight md:mb-8 md:flex  md:flex-col md:justify-center md:text-left md:leading-tight">
                                $25/HR
                            </p>

                            <p className="mb-2 w-full text-center text-xl leading-tight sm:leading-tight md:mb-2  md:text-left md:leading-tight">
                                Project Manager
                            </p>
                            <p className="mb-2 w-full text-center text-xl leading-tight sm:leading-tight md:mb-2  md:text-left md:leading-tight">
                                Developer
                            </p>
                            <p className="mb-2 w-full text-center text-xl leading-tight sm:leading-tight md:mb-2  md:text-left md:leading-tight">
                                Devops
                            </p>
                            <p className="mb-2 w-full text-center text-xl leading-tight sm:leading-tight md:mb-2  md:text-left md:leading-tight">
                                Designer
                            </p>
                        </div>

                        <div className=" mb-24 flex  flex-col md:mr-24">
                            <p className="mb-2 w-full text-center text-4xl font-bold leading-tight text-primary  sm:leading-tight md:mb-8 md:flex  md:flex-col md:justify-center md:text-left md:leading-tight">
                                $18/HR
                            </p>

                            <p className="mb-2 w-full text-center text-xl leading-tight sm:leading-tight md:mb-2  md:text-left md:leading-tight">
                                QA Engineer
                            </p>
                        </div>

                        <div className=" mb-24 flex  flex-col md:mr-24">
                            <p className="mb-2 w-full text-center text-4xl font-bold leading-tight text-primary  sm:leading-tight md:mb-8 md:flex  md:flex-col md:justify-center md:text-left md:leading-tight">
                                $350/WP Project
                            </p>

                            <p className="mb-2 w-full text-center text-xl leading-tight sm:leading-tight md:mb-2  md:text-left md:leading-tight">
                                Wordpress Projects starting from $350
                            </p>
                        </div>
                    </div>

                    <div className="flex w-full justify-center">
                        {/* Add Button */}
                        <Link
                            href="/contact"
                            className="rounded-sm bg-primary px-9 py-4 text-base  font-semibold text-dark shadow-submit duration-300 hover:bg-primary/90 "
                        >
                            Talk To Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;
