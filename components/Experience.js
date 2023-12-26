import Image from 'next/image';
import { experience } from '@/data/config';

export default function Experience() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {experience.title}
        </h2>
      </div>
      <p className="text-lg">{experience.desc}</p>
      <div className=" mt-8">
        {experience.experiences.map((item, index) => {
          return (
            <div
              key={index}
              className="projectCard p-6 border border-lightText rounded-xl mb-4 dark:hover-border-orange-100"
            >
              <h3>{item.title}</h3>
              <p>{item.company}</p>
              <div className="flex items-center flex-wrap -m-3 pt-5">
                <ul className="ml-3 list-disc ">
                  {item.description.map((desc, dIndex) => {
                    return (
                      <li className="ml-3" key={dIndex}>
                        {desc}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex items-center flex-wrap -m-3 pt-5">
                {item.tech.map((t, i) => {
                  return (
                    <span
                      className="border border-lightText rounded-lg m-1 px-2 py-1"
                      key={i}
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
