import Layout from "@/components/layouts/Layout";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <h2 className="mb-5 mt-7 font-bold">technologies</h2>
      <ul className="ml-5 list-disc">
        <li>
          <div className="pl-1">
            <b>programming languages</b> <br />
            JavaScript, TypeScript, HTML, CSS, Python, Java, SQL
          </div>
        </li>
        <li className="mt-2">
          <div className="pl-1">
            <b>frameworks</b> <br />
            React, Next.js, Tailwind CSS, Node.js, Ionic, Flask, Spring Boot
          </div>
        </li>
        <li className="mt-2">
          <div className="pl-1">
            <b>tools</b> <br />
            AWS, Git, Docker, Figma
          </div>
        </li>
      </ul>

      <h2 className="mb-5 mt-7 font-bold">experiences</h2>
      <ul className="ml-5 list-disc">
        <li>
          <div className="pl-1">
            <b> software engineer</b> <i className="px-3">Google</i>{" "}
            <i>2023.01 - 2023.05</i> <br />
          </div>
        </li>
        <li className="mt-2">
          <div className="pl-1">
            <b> software development engineer</b> <i className="px-3">Amazon</i>{" "}
            <i>2021.02 - 2021.06</i> <br />
          </div>
        </li>
        <li className="mt-2">
          <div className="pl-1">
            <b> AI engineer</b> <i className="px-3">OpenAI</i>{" "}
            <i>2016.07 - 2021.02</i> <br />
          </div>
        </li>
      </ul>

      <h2 className="mb-5 mt-7 font-bold">education</h2>
      <ul className="ml-5 list-disc">
        <li className="mt-5">
          <div className="pl-1">
            <b> Master of Computer Science</b>
            <i className="px-3">2014.07 - 2016.07</i> <br />
            Stanford University <br />
          </div>
        </li>
        <li className="mt-5">
          <div className="pl-1">
            <b>Bachelor of Computer Science</b>
            <i className="px-3">2011.07 - 2014.17</i> <br />
            University of California <br />
          </div>
        </li>
      </ul>
    </Layout>
  );
};

export default AboutPage;
