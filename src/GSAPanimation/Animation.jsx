import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
function Animation() {


      // adding gsap with navber
  const tl = gsap.timeline();

  const onLoadHandle = () => {
    tl.fromTo(
      "#logo",
      {
        y: -40,
        duration: 1,
        delay: 0.2,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
    tl.fromTo(
      ".animate",
      {
        y: -40,
        duration: 1,
        delay: 0.2,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
                stagger: 0.4

      }
    );
    tl.fromTo(
      "#search",
      {
        y: -40,
        duration: 1,
        delay: 0.2,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
    tl.fromTo(
      "#notifications",
      {
        y: -40,
        duration: 1,
        delay: 0.2,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );

    // animate landing page
    tl.fromTo(
      "#landingHeading",
      {
        x: -200,
        duration: .5,
        delay: 0.1,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    );
    tl.fromTo(
      "#landingPara",
      {
        x: 200,
        duration: .5,
        delay: 0.1,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      }
    );
    tl.fromTo(
      "#landingButton",
      {
        y: 100,
        duration: .5,
        delay: 0.1,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );

    // section 3 vireous devices
    gsap.fromTo(
      ".devicesAnimation",
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: .6,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".devicesAnimation",
          start: "top 100%", // যখন এলিমেন্ট পেজে দেখা যাবে তখন শুরু হবে
          end: "bottom 65%",
          scrub: 2,
        },
      }
    );
    // prequent ask quesiton section
    gsap.fromTo(
      ".askQuestion",
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: .6,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".askQuestion",
          start: "top 100%", // যখন এলিমেন্ট পেজে দেখা যাবে তখন শুরু হবে
          end: "bottom 65%",
          scrub: 2,
        },
      }
    );
    // plans animation
    gsap.fromTo(
      ".plansAnimation",
      { opacity: 0, x: 350 },
      {
        opacity: 1,
        x: 0,
        duration: .6,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".plansAnimation",
          start: "top 100%", // যখন এলিমেন্ট পেজে দেখা যাবে তখন শুরু হবে
          end: "bottom 85%",
          scrub: 2,
        },
      }
    );
  };

  useGSAP(() => {
    onLoadHandle();
  }, []);

  return (
    <>
    </>
  )
}

export default Animation