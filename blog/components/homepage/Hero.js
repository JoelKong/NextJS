import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/personalpic.jpg"
          alt="An image showing Joel"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Joel</h1>
      <p>I am learning about web development and Next.js is awesome</p>
    </section>
  );
}

export default Hero;
