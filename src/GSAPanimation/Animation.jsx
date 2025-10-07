import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
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