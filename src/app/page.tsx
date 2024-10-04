
      import Image from "next/image";
import logo from "../public/logo.jpeg"; // importing the logo image

export default function Home() {
  return (
    <div className="container">
      <div className="picture-container">
        <Image src={logo} alt="teacher" width={700} height={700} />
      </div>
      <div className="description">
        <h1>WE ARE HIRING TEACHERS</h1>
        <h5>SCHOOL NAME : Sparkle high School</h5>
        <p>
          "Join our team of dedicated educators! We are looking for passionate teachers who are committed to fostering a positive and dynamic learning environment. 
          If you are enthusiastic about shaping young minds and making a lasting impact, we encourage you to apply. Whether you're an experienced educator or just starting your career, we welcome you to be a part of our mission to inspire and educate the next generation."
        </p>
      </div>
    </div>
  );
}
