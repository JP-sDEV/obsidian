import Image from 'next/image';
import { education } from '@/data/config';

export default function Education() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-2 md:w-max ">
          {education.title}
        </h2>
      </div>
      <div className="mt-0">
        {education.education.map((item, index) => {
          return (
            <div className="flex flex-col p-6 border border-lightText rounded-xl mb-4 dark:hover-border-orange-100">

            <div
              key={index}
              className="flex flex-row justify-between"
            >
            
              <h3 className=''>{item.school}</h3>
              <p className=''>{item.start_year} - {item.graduation_year}</p>
              </div>

              <div className=" -m-3 pt-5">
                {item.majors && (
                <div className="flex flex-row   py-1 px-3">
                    <span className=" text-lightText  transition-colors duration-500 ellipsis">
                        {item.majors}
                    </span>
                </div>

                )}
              </div>
            
            </div>
          );
        })}
      </div>
    </div>
  );
}