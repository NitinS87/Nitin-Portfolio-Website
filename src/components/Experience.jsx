import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            companyLink="https://www.empasslearning.com/"
            position="Frontend Engineer Intern"
            company="@Empass Learning"
            time="March 2023-June 2023"
            address="Remote"
            work="Worked on creating multiple homepages for multiple apps, styling existing apps. Debugged and fixed bugs in existing apps.
            Created a game for dyslexia disabled people using React and TailwindCSS. Worked on many other projects for group of people suffering 
            from OCD and other mental disorders using React and TailwindCSS"
          />
          <Details
            companyLink="https://www.coffeee.io/"
            position="Software Development Engineer Intern"
            company="@Coffeee.io"
            time="July 2023-September 2023"
            address="Gurgaon, India"
            work="Developed a data scraping tool that lets users search for a party name and check its records in different government entities as a client project. 
                  Implemented a robust Restful Web Services API using Node.js, Express, and PostgreSQL to facilitate seamless 
                  interaction between the web app and database, incorporating modular design and run-time optimization techniques. 
                  Worked on several screens of the React.js web app, ensuring a seamless and responsive user experience across platforms. 
                  Created Java Selenium scripts that scrap data by performing user-simulated actions. 
                  Worked on maintaining Coffeee.io, their recruiting platform which has over 1lac+ users by working on AWS S3 and Amazon Aurora."
          />
          <Details
            companyLink="https://github.com/NitinS87"
            position="Software Engineer"
            company="@Open Source Projects"
            time="2022-Present"
            address="Remote"
            work="Worked on many open source projects based on React, NextJS, Javascript and Docker."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
