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

      
    <hr></hr>
        <p>Hello, I'm <strong>Jordan Micko Deloria</strong>, currently 20 years old, from San Fernando, Pampanga. My hobbies include graphic designing, video editing, and playing badminton. My favorite music is indie, with bands like The Neighbourhood; some of my favorite songs are "Softcore" and "Crybaby." I enjoy kare-kare and other sweet foods like chocolates. I also love exploring my hobbies and passions.
        </p>
        <hr></hr>
        <p>I chose IT because I had a passion when i was a for technology, but I lost that passion during my college days when I realized I wanted to pursue other interests.
        </p>
        <hr></hr>
        <p>I could see myself doing freelance work in graphic design or web design after graduation.</p>
        <hr></hr>
        <p>To gain skills in troubleshooting integration issues and learning best practices for creating scalable and secure systems.
        </p>
        <hr></hr>
        <p>Understanding the foundational concepts behind web designing effective and efficient system architectures. And learning how to design systems that can grow and handle increased loads without compromising performance.</p>

        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
