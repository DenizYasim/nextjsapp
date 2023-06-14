import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
  return (
    <div className={styles.maincontainer}>
      <Link href="/blog/testid" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            molestiae suscipit a repellendus ex deserunt facere amet qui, dolore
            at quam neque nulla modi iste porro numquam maxime deleniti animi
            illo repellat aperiam esse debitis aut sapiente. Eligendi,
            repellendus enim?
          </p>
        </div>
      </Link>
      <Link href="/blog/testid" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            molestiae suscipit a repellendus ex deserunt facere amet qui, dolore
            at quam neque nulla modi iste porro numquam maxime deleniti animi
            illo repellat aperiam esse debitis aut sapiente. Eligendi,
            repellendus enim?
          </p>
        </div>
      </Link>
      <Link href="/blog/testid" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            molestiae suscipit a repellendus ex deserunt facere amet qui, dolore
            at quam neque nulla modi iste porro numquam maxime deleniti animi
            illo repellat aperiam esse debitis aut sapiente. Eligendi,
            repellendus enim?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
