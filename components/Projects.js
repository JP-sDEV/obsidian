import Image from 'next/image';
import { projects } from '@/data/config';

export default function Projects() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className=" mt-8">
        {projects.projects.map((item, index) => {
          return (
            <div
              key={index}
              className="projectCard p-6 border border-lightText rounded-xl mb-4 dark:hover-border-orange-100"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                {item.link && (
                  <a
                    href={item.link}
                    className="flex items-center  py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/link.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2  text-lightText  transition-colors duration-500 ellipsis">
                      {item.link}
                    </span>
                  </a>
                )}
                {item.github && (
                  <a
                    href={`${item.github}`}
                    className="flex items-center py-1 px-3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src="/static/icons/github.svg"
                      width={18}
                      height={18}
                      alt="Link icon"
                    />
                    <span className="ml-2 text-lightText transition-colors duration-500">
                      {item.github}
                    </span>
                  </a>
                )}
              </div>
              
              <div className="flex items-center flex-wrap -m-3 pt-5">
              {item.tech.map((t, i) => {
                return (
                  <span className="border border-lightText rounded-lg m-1 px-2 py-1" key={i}>
                    {t}
                  </span>
                )}
              )}
               </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}