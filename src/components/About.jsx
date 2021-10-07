import React from "react";
import img1 from "../Assets/myface.jpg"

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0 image"
              src={img1}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About Me</h1>
            <p> My name is Zackary Davis. I am a recent college graduate who is looking to make a run at a career in software development. I come from a military family and have always had a knack for adjusting to change. This is important because my college degree is in history and this is a new chapter in my life that could pose more of a challenge to my status quo.</p>
            <p> I am pursuing software development for its challenge and ever changing environment. I would be adament to say I haven't had friends push me in this direction either. But with the challenge and my education background up to this point, I know I am up to whatever could be thrown at me.</p>
            <p> To get to know a little bit more about what I have done so far, check out the links above or my <a href="./Assets/ZackaryDavis_Resume copy.pdf">Resume</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;