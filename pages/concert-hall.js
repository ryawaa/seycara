import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ImSoundcloud } from "react-icons/im";
import { BsYoutube } from "react-icons/bs";

export default function ConcertHall() {
  return (
    <section
      id="#"
      className="flex flex-col min-h-screen bg-cover bg-center relative m-auto"
      style={{
        background:
          "linear-gradient( rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)), url(https://static.wixstatic.com/media/f5599d_21ce3d70a6aa4b819113c355c0159b97.jpg/v1/fill/w_1486,h_967,al_tl,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_21ce3d70a6aa4b819113c355c0159b97.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row mt-32 m-auto space-x-2">
        <div className="flex flex-col space-y-4">
          <h2 className="absolute text-9xl font-bold text-[#313244] -translate-y-8">
            concert hall
          </h2>
          <h1 className="relative text-7xl font-semibold">
            The music of our <span class="text-[#D0A48C]">imagination</span>
          </h1>
          <h3 className="text-3xl font-semibold max-w-prose leading-10">
            The music of Seycara, featuring Seycara's Own - The Seycara
            Orchestra @ Seycara Studios in Canada with in house production
          </h3>
          <hr />
          <div className="rounded-3xl p-4 flex-col flex gap-4">
            <div class="flex flex-col pl-4">
              <h1 className="text-2xl font-bold">
                The Seycara Concert Hall - Youtube Features
              </h1>
              <h6 className="text-xs">
                The Best of Seycara Orchestral on YouTube!
              </h6>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              <div>
                <div className="p-4  rounded-3xl flex flex-row gap-3">
                  <div class="flex flex-col">
                    <iframe
                      className="rounded-xl mb-3"
                      width="333"
                      height="196"
                      src="https://www.youtube.com/embed/tY3x3JXqAJs"
                    ></iframe>
                    <h6 className="text-xs font-semibold">
                      MUSIC FOR ORCHESTRA
                    </h6>
                    <h3 className="font-semibold">
                      Shelter - Ghibli Edition - 2017
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-4  rounded-3xl flex flex-row gap-3">
                  <div class="flex flex-col">
                    <iframe
                      className="rounded-xl mb-3"
                      width="333"
                      height="196"
                      src="https://www.youtube.com/embed/jJlC4QyKGSA"
                    ></iframe>
                    <h6 className="text-xs font-semibold">
                      CONCERTINO FOR BASSOON AND ORCHESTRA
                    </h6>
                    <h3 className="font-semibold">Festival of Lights - 2019</h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-4  rounded-3xl flex flex-row gap-3">
                  <div class="flex flex-col">
                    <iframe
                      className="rounded-xl mb-3"
                      width="333"
                      height="196"
                      src="https://www.youtube.com/embed/Wu1cBfUDzok"
                    ></iframe>
                    <h6 className="text-xs font-semibold">
                      FOR PIANO, VIOLIN, AND ORCHESTRA
                    </h6>
                    <h3 className="font-semibold">
                      Glassy Sky (Tokyo Ghoul) - 2018
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-4  rounded-3xl flex flex-row gap-3">
                  <div class="flex flex-col">
                    <iframe
                      className="rounded-xl mb-3"
                      width="333"
                      height="196"
                      src="https://www.youtube.com/embed/df1gVQFitPM"
                    ></iframe>
                    <h6 className="text-xs font-semibold">FOR ORCHESTRA</h6>
                    <h3 className="font-semibold">
                      Torikago, Darling In The Franxx - 2018
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-4  rounded-3xl flex flex-row gap-3">
                  <div class="flex flex-col">
                    <iframe
                      className="rounded-xl mb-3"
                      width="333"
                      height="196"
                      src="https://www.youtube.com/embed/fC-RpbZjUQQ"
                    ></iframe>
                    <h6 className="text-xs font-semibold">
                      MUSIC FOR OCHESTRA AND CHILDRENS CHOIR
                    </h6>
                    <h3 className="font-semibold">
                      Dreams Of The Future - 2017
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className="p-4  rounded-3xl flex flex-row gap-3">
                  <div class="flex flex-col">
                    <iframe
                      className="rounded-xl mb-3"
                      width="333"
                      height="196"
                      src="https://www.youtube.com/embed/0t_csXm8qhA"
                    ></iframe>
                    <h6 className="text-xs font-semibold">
                      FOR ENGLISH HORN AND ORCHESTRA
                    </h6>
                    <h3 className="font-semibold">
                      Violet Evergarden ED - 2018
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="rounded-3xl p-4 flex-col flex gap-4">
            <div className="pb-16 ">
              <div class="pl-4">
                <h1 className="text-2xl font-bold">Soundcloud Exclusives</h1>
                <h6 className="text-xs">
                  Pieces not found anywhere but here, on soundcloud!
                </h6>
              </div>
              <div className="mt-4 p-4  rounded-3xl flex flex-row gap-3">
                <img
                  className="rounded-xl w-[72px] h-[72px]"
                  src="https://i1.sndcdn.com/artworks-000337444146-cv4f8b-t200x200.jpg"
                />
                <div class="flex flex-col">
                  <h6 className="text-xs font-semibold">SEYCHARA ORCHESTRAL</h6>
                  <h3 className="font-semibold">
                    The Girl Who Became An Angel (feat. Sagisapon) | For Ghibli
                    Vocals and Orchestra
                  </h3>
                  <a className="mt-2 text-xs underline items-center flex flex-row gap-2">
                    <ImSoundcloud className="inline text-2xl" />
                    LISTEN ON SOUNDCLOUD
                  </a>
                </div>
              </div>
              <div className="mt-2.5 p-4  rounded-3xl flex flex-row gap-3">
                <img
                  className="rounded-xl w-[72px] h-[72px]"
                  src="https://i1.sndcdn.com/artworks-000324235568-12hw0c-t200x200.jpg"
                />
                <div class="flex flex-col">
                  <h6 className="text-xs font-semibold">SEYCARA ORCHESTRAL</h6>
                  <h3 className="font-semibold">
                    "Michishirube" (Violet Evergarden ED) | Ghibli Piano and
                    Violin | Emotional, Beautiful OST
                  </h3>
                  <a className="mt-2 text-xs underline items-center flex flex-row gap-2">
                    <ImSoundcloud className="inline text-2xl" />
                    LISTEN ON SOUNDCLOUD
                  </a>
                </div>
              </div>
              <div className="mt-2.5 p-4  rounded-3xl flex flex-row gap-3">
                <img
                  className="rounded-xl w-[72px] h-[72px]"
                  src="https://i1.sndcdn.com/artworks-000353345595-b0gz0v-t200x200.jpg"
                />
                <div class="flex flex-col">
                  <h6 className="text-xs font-semibold">SEYCARA ORCHESTRAL</h6>
                  <h3 className="font-semibold">
                    Amelia's Waltz | Ghibli Clarinet And Piano | Beautiful,
                    Emotional OST
                  </h3>
                  <a className="mt-2 text-xs underline items-center flex flex-row gap-2">
                    <ImSoundcloud className="inline text-2xl" />
                    LISTEN ON SOUNDCLOUD
                  </a>
                </div>
              </div>
              <div className="mt-2.5 p-4  rounded-3xl flex flex-row gap-3">
                <img
                  className="rounded-xl w-[72px] h-[72px]"
                  src="https://i1.sndcdn.com/artworks-000428517684-d93b9h-t200x200.jpg"
                />
                <div class="flex flex-col">
                  <h6 className="text-xs font-semibold">SEYCARA ORCHESTRAL</h6>
                  <h3 className="font-semibold">
                    Wind Spirit | Ghibli Flute & Orchestra | Original
                  </h3>
                  <a className="mt-2 text-xs underline items-center flex flex-row gap-2">
                    <ImSoundcloud className="inline text-2xl" />
                    LISTEN ON SOUNDCLOUD
                  </a>
                </div>
              </div>
              <div className="mt-2.5 p-4  rounded-3xl flex flex-row gap-3">
                <img
                  className="rounded-xl w-[72px] h-[72px]"
                  src="https://i1.sndcdn.com/artworks-000290814336-flj7yq-t200x200.jpg"
                />
                <div class="flex flex-col">
                  <h6 className="text-xs font-semibold">SEYCARA ORCHESTRAL</h6>
                  <h3 className="font-semibold">
                    "Nandemonaiya" | Ghibli Orchestra Edition「MV」Special |
                    RADWIMPS (Kimi no Na wa, 君の名は OST)
                  </h3>
                  <a className="mt-2 text-xs underline items-center flex flex-row gap-2">
                    <ImSoundcloud className="inline text-2xl" />
                    LISTEN ON SOUNDCLOUD
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
