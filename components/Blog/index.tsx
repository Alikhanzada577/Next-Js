"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import { useEffect, useState } from "react";
import { endpoints } from "./contants";
import { Post } from "@/types/blog";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [numberOfPostsToShow, setnumberOfPostsToShow] = useState(3);

    const onClickHandler = () => {
        if (posts.length === numberOfPostsToShow) {
            setnumberOfPostsToShow((state) => state - 3);
        } else {
            setnumberOfPostsToShow((state) => state + 3);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                let response = await fetch(endpoints.articles, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                let jsonRes = await response.json();

                const posts: Post[] = jsonRes.map((post: any) => {
                    return {
                        id: post.id,
                        title: post.title,
                        description: post.description,
                        slug: post.slug,
                        date: post.readable_publish_date,
                        tags: post.tag_list,
                        author: post.user,
                        cover: post.cover_image
                    };
                });

                setPosts(posts);
            } catch (err: unknown) {
                console.error("Error in fetching posts", err);
            }
        })();
    }, []);

    return (
        <section
            id="blog"
            className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
        >
            <div className="container">
                <SectionTitle
                    title="Our Latest Blogs"
                    paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
                    center
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                    {posts.slice(0, numberOfPostsToShow).map((blog) => (
                        <div key={blog.id} className="w-full">
                            <SingleBlog blog={blog} />
                        </div>
                    ))}
                </div>
                <div className="text-center" style={{ marginTop: "5rem" }}>
                    <button
                        onClick={onClickHandler}
                        value="Send"
                        className=" rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                        {posts.length === numberOfPostsToShow
                            ? "Show Less"
                            : "Show More"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
