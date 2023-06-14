import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital stroytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting stories for awards and{" "}
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we though?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            veritatis iusto laudantium excepturi, tempora officia doloribus
            neque ullam aut quibusdam unde rerum vel totam error facere ea nulla
            et placeat sapiente. Eaque doloribus harum doloremque magni, fugit
            sed?
            <br />
            <br />
            Eaque molestias illum laborum quia at neque provident vel maiores,
            ut, esse magnam eius odio nesciunt. Optio similique sequi
            perferendis obcaecati nostrum deserunt ex ab recusandae, qui
            laudantium aut, id, itaque doloremque!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Whats we do</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi
            obcaecati animi quibusdam neque incidunt illum inventore omnis
            facilis. Officia, maiores hic libero aliquid qui delectus sint iusto
            unde a.
            <br />
            <br />
            -Dynamic Websites
            <br />
            <br />
            -Fast and handy
            <br />
            <br />
            -Mobile apps
          </p>
          <Button url="contact" text="contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
