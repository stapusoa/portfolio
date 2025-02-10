import React from "react";

interface BlogCardProps {
  image: string;
  link: string;
  product: string;
  type: string;
  date: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, link, product, type, date, description }) => (
  <>
        <a href={link} className="decoration-none hover:rounded-3xl hover:shadow-md group p-3 snap-start shrink-0 h-fit w-full min-w-60 items-start justify-between">
          <div className="relative group overflow-hidden w-full">
            <img
              alt=""
              src={image}
              className="aspect-video transition-transform duration-500 ease-in-out transform group-hover:scale-110 w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="max-w-xl">
            <div className="mt-8 flex items-center justify-between gap-x-4 text-xs">
              <time className="text-gray-500 font-gilroy">
                {date}
              </time>
              <a

                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium font-gilroy text-gray-600 hover:bg-gray-100"
              >
                {type}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg/6 text-left font-gilroy font-semibold text-gray-900 group-hover:text-gray-600">
                <a>
                  <span className="absolute inset-0" />
                  {product}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-left text-sm/6 text-gray-500 font-gilroy ">{description}</p>
            </div>

          </div>
        </a>
        












     </>
);

export default BlogCard;