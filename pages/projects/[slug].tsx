import Layout from "../../components/layouts/Layout";
import { Project } from "../../shared/types";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import path from "path";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "projects"));
  console.log("files: ", files);

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || Array.isArray(params.slug)) {
    return {
      notFound: true,
    };
  }

  const markdownWithMetadata = fs
    .readFileSync(path.join(process.cwd(), "projects", params.slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const project: Project = {
    filename: params.slug,
    title: data.title,
    subtitle: data.subtitle,
    link: data.link,
    image: data.image,
    isExternal: data.isExternal,
    content: content,
  };

  return {
    props: {
      project,
    },
  };
};

const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Layout>
      <div>
        <h1 className="mt-4 text-center text-3xl font-bold">{project.title}</h1>
        <p className="text-1xl mt-2 text-center italic">{project.subtitle}</p>
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={1000}
          className="mt-7 w-full rounded-3xl object-cover"
        />
        <ReactMarkdown
          className="mx-auto mt-7 w-4/5"
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1
                style={{
                  fontSize: "1.5em",
                  fontWeight: "bold",
                  marginBottom: "1em",
                  marginTop: "0.5em",
                }}
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                style={{
                  fontSize: "1.3em",
                  fontWeight: "bold",
                  marginBottom: "1em",
                  marginTop: "0.5em",
                }}
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                style={{
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  marginBottom: "1em",
                  marginTop: "0.5em",
                }}
                {...props}
              />
            ),
            h4: ({ node, ...props }) => (
              <h4
                style={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  marginBottom: "0.5em",
                  marginTop: "0.5em",
                }}
                {...props}
              />
            ),
            h5: ({ node, ...props }) => (
              <h5
                style={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  marginBottom: "0.5em",
                  marginTop: "0em",
                }}
                {...props}
              />
            ),
            h6: ({ node, ...props }) => (
              <h6
                style={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  marginBottom: "0.5em",
                  marginTop: "0em",
                }}
                {...props}
              />
            ),
            ul: ({ node, ...props }) => (
              <ul
                style={{ listStyleType: "disc", paddingLeft: "1em" }}
                {...props}
              />
            ),
            ol: ({ node, ...props }) => (
              <ol
                style={{ listStyleType: "decimal", paddingLeft: "1em" }}
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li style={{ margin: "0.5em 0" }} {...props} />
            ),
            p: ({ node, ...props }) => (
              <p style={{ margin: "0 0", lineHeight: "1.5em" }} {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                style={{
                  margin: "1em 0",
                  paddingLeft: "1em",
                  borderLeft: "4px solid #ddd",
                }}
                {...props}
              />
            ),
            code: ({ node, ...props }) => (
              <code
                style={{
                  fontFamily: "monospace",
                  backgroundColor: "#f9f9f9",
                  padding: "2px 4px",
                  borderRadius: "3px",
                }}
                {...props}
              />
            ),
            pre: ({ node, ...props }) => (
              <pre
                style={{
                  fontFamily: "monospace",
                  backgroundColor: "#f9f9f9",
                  padding: "1em",
                  borderRadius: "3px",
                  overflowX: "auto",
                }}
                {...props}
              />
            ),
            em: ({ node, ...props }) => (
              <em style={{ fontStyle: "italic" }} {...props} />
            ),
            strong: ({ node, ...props }) => (
              <strong style={{ fontWeight: "bold" }} {...props} />
            ),
            del: ({ node, ...props }) => (
              <del style={{ textDecoration: "line-through" }} {...props} />
            ),
            hr: ({ node, ...props }) => (
              <hr
                style={{ border: "none", borderTop: "1px solid #ddd" }}
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                style={{ color: "#0366d6", textDecoration: "none" }}
                {...props}
              />
            ),
          }}
        >
          {project.content}
        </ReactMarkdown>
      </div>
    </Layout>
  );
};

export default ProjectPage;
