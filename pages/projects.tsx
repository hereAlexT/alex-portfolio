import { Project } from "../shared/types";
import Layout from "@/components/layouts/Layout";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import React from "react";

export const getStaticProps = async () => {
  const files = fs.readdirSync("projects");

  const projects: Project[] = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(path.join("projects", filename))
      .toString();

    const { data, content } = matter(markdownWithMetadata);

    const project: Project = {
      filename: filename.replace(".md", ""),
      title: data.title,
      subtitle: data.subtitle,
      link: data.link,
      image: data.image,
      isExternal: data.isExternal,
    };
    console.log("contnet", content);

    return project;
  });

  return {
    props: {
      projects,
    },
  };
};

const ProjectsPage: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-between space-x-1 md:space-x-1">
        {projects.map((project, index) => (
          <Link
            href={`/projects/${project.filename}`}
            key={index}
            className="md:w-17/36 mb-4 w-full"
          >
            <div className=" w-full overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt="pic"
                width={720}
                height={360}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <h4 className="mt-3 text-lg font-bold">{project.title}</h4>
            <p className="mt-1">{project.subtitle}</p>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
