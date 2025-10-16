import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../common/Container";

function Play() {
  const { id } = useParams();
  const [video, setVideo] = useState({
    published_at: '',
    name: '',
    key: ''
  });
  console.log(video);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTA1YmQzYTY2MWMzYWQxOGIyOGRmZGRlMjc0MTZlOCIsIm5iZiI6MTc1NzUxMTMyOS41MjEsInN1YiI6IjY4YzE3ZWExY2IwMDI0MWE4YzRlNmY0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4VgIPDknlg-LsiibDyaZ6qZldUrgsLly_zuLKEoVlYs",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setVideo(res.results[0]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className="py-8">
        <div className="text-white overflow-hidden w-screen py-8 md:h-[700px] h-[600px] lg:h-[1000px] ">
          <div className="h-24 w-full"></div>
          <Container className="mx-auto h-full relative xl:p-0  overflow-hidden">
            <div className="2xl:h-[90%] xl:h-[80%] lg:h-[75%] lg:w-[87%] md:h-[70%] h-[60%] w-[95%] rounded-lg overflow-hidden md:w-[80%] xl:w-[90%] mx-auto 2xl:w-full  ">
              <div className="h-full w-full ">
                <iframe
                  className="rounded-3 lg:rounded-lg h-full w-full"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title="React Projects For Beginners | Master React.js In One Video | React Projects for Resume"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Container>
        </div>
        <Container className={"mx-auto"}>
          <div className="w-full flex items-center justify-between text-lg font-medium font-manrope  text-white px-4">
            <div>
              <p>{video.name}</p>
            </div>
            <div>
              <p>Relese Date: {video.published_at.slice(0, 10)}</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Play;
