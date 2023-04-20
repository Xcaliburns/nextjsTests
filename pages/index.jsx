
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>        
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Ceci est un site de test mais je dois dire que next est génial</p>
       
        <div>  <p className="styled">un paragraphe avec styled JSX, c'est pas beau mais c'est là</p>
            <style jsx>{`
        .styled {
          margin: 50px;
        }
        p {
          color: blue;
          background-color:red;
          text-align:center;
        }
      `}</style></div>
         
      </section>
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
