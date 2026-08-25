import React from "react";
import { ComingSoon } from "@/components/ui/ComingSoon/ComingSoon";

interface BlogCardProps {
  image?: string;
  link: string;
  product: string;
  type: string;
  date: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ link, product, type, date, description }) => (
  <>
    <a href={link} className="no-underline hover:rounded-3xl hover:shadow-md group p-3 snap-start shrink-0 h-fit w-full min-w-60 items-start justify-between">
      <div className="relative group overflow-hidden w-full">
        {/*
        <img
          loading="lazy"
          decoding="async"
          alt=""
          src={image}
          className="aspect-video transition-transform duration-500 ease-in-out transform group-hover:scale-110 w-full rounded-2xl bg-neutral-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        */}
        <ComingSoon
              />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-neutral-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center justify-between gap-x-4 text-xs">
          <time className="text-neutral-500 font-sans">
            {date}
          </time>
          <a

            className="relative z-10 rounded-full bg-neutral-50 px-3 py-1.5 font-medium font-sans text-neutral-600 hover:bg-neutral-100"
          >
            {type}
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg leading-6 text-left font-sans font-semibold text-neutral-900 group-hover:text-neutral-600">
            <a>
              <span className="absolute inset-0" />
              {product}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-left text-sm leading-6 text-neutral-500 font-sans ">{description}</p>
        </div>

      </div>
    </a>













  </>
);

export default BlogCard;