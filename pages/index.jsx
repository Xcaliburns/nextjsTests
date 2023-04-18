import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
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
    </Layout>
  );
}
