import Contact from '@/components/Contact';
import Head from 'next/head';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Stack from '@/components/Stack';
import Education from '@/components/Education';
import { meta } from '@/data/config';

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="p-6 lg:p-20 max-w-4xl m-auto w-fit">
        <Hero />
        <div className="p-0 space-y-10">
          <Experience />
          <Projects />
          <Stack />
          <Education />
          <Contact />
        </div>
      </div>
    </>
  );
}
