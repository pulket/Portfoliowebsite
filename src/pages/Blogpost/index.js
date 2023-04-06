import React from 'react';
import styles from '@component/styles/Home.module.css';
import Image from 'next/image';
import Parser from 'rss-parser';
import stylea from '@component/styles/blogcard.module.css';

function BlogHomePage({ items }) {
  return (
    <div className={styles.backgoundwhiteindex}>
      <h2 style={{ fontSize: 72, alignContent: 'center', display: 'flex', marginTop: 20, marginBottom: 20, fontWeight: 700, justifyContent: "center", color: '#E5E9E9' }}>Latest Blogs</h2>
      <div className={stylea.blog}>
        {items.map((item, index) => (
          <a key={index} href={item.guid} target='blank' style={{ textDecoration: 'none' }}>
            <div className={stylea.mainblogcard}>
              <div className={stylea.blogfirstpart}>
                <h2 className={stylea.titlewidth}> {item.title}</h2>
                <p style={{ color: '#E5E9E9' }}>Categories: {item.categories.join(", ").substring(0, 35)}</p>
                <p style={{ color: '#E5E9E9' }}>Published on: {item.pubDate}</p>
                <p style={{ color: '#E5E9E9' }}>Author: {item.author}</p>
              </div>
              <Image className='' style={{ objectFit: 'cover', alignContent: 'center' }} src={item.thumbnail} height={280} width={260} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pulket");
  const data = await res.json();

  return {
    props: {
      items: data.items,
    },
  };
}

export default BlogHomePage;
