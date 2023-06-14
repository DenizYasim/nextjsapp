import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <div className={styles.author}>
            <Image
              src={""}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}></span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          earum porro ex nisi! Excepturi magnam suscipit labore vitae? Veritatis
          magni hic, voluptate eaque eius minima consequatur laudantium, iure
          quos facere excepturi recusandae minus sapiente explicabo ipsum
          laboriosam. Quidem, totam! Temporibus dignissimos qui ab, dolorem
          asperiores laborum itaque aperiam dolor numquam culpa hic, quod
          ducimus deleniti corporis aspernatur vitae ipsam! Eum odio libero
          doloribus veritatis, aliquam expedita tempore ullam, adipisci officiis
          molestias sapiente incidunt. Ipsa quos excepturi maiores a quidem esse
          est suscipit saepe repudiandae error vero officiis ad impedit
          provident blanditiis quam tempore iure cumque, distinctio id magnam?
          Ex, qui.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
