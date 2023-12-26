import { Post } from "@/types/blog"; // Blog,
import Image from "next/image";
import Link from "next/link";
import placeholderBlogImage from "@/public/images/blog/blog1.webp";

const SingleBlog = ({ blog }: { blog: Post }) => {
    const { title, description, cover, author, tags, date, id } = blog;

    return (
        <>
            <div
                className="wow fadeInUp group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
                data-wow-delay=".1s"
            >
                <Link href="#" className="relative block aspect-[37/22] w-full">
                    {tags?.length > 0 && (
                        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
                            {tags[0]}
                        </span>
                    )}

                    <Image
                        src={cover ?? placeholderBlogImage}
                        alt="image"
                        fill
                    />
                </Link>
                <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
                    <h3>
                        <Link
                            href={`/blog-details/${id}`}
                            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
                            style={{ height: "7rem" }}
                        >
                            {title}
                        </Link>
                    </h3>
                    <p
                        className=" mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"
                        style={{ height: "4.5rem" }}
                    >
                        {description}
                    </p>
                    <div className="flex items-center">
                        <div className="inline-block">
                            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                                Date
                            </h4>
                            <p className="text-xs text-body-color">{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlog;
