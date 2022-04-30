import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from "next"
import fs from "fs"
import path from "path"
import matter from 'gray-matter'
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"

// export default function Works({source}): InferGetServerSidePropsType<typeof GetStaticProps> {
//   return(
//     <div>
//       Works page
//       <MDXRemote />
//     </div>
//   )
// };

export const getStaticPaths: GetStaticPaths = async () => {
  const cringe = path.join('articles/music');
  const files = fs.readdirSync(cringe);
  const paths = files.map(file => ({
    params: {
      slug: file.replace('.mdx', '')
    },
  }));

  return {
    paths,
    fallback: false,
  }
}

type Params = { [param: string]: any; }

export const getStaticProps: GetStaticProps = async ({ params : {slug} }: Params) => {
  const article: any = fs.readdirSync(path.join('articles/music', slug + '.mdx'));

  const { data: metaData, content } = matter(article);

  const mdxSrc = await serialize(content, { scope: metaData })
  return { props: { source: mdxSrc }}
}