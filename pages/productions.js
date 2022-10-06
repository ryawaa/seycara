import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsSpotify, BsYoutube, BsArrowRightShort } from "react-icons/bs";
import { CgHeart } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
export default function Productions() {
  return (
    <section
      id="#"
      className="flex flex-col min-h-screen bg-cover bg-center relative m-auto"
      style={{
        background:
          "linear-gradient( rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)), url(https://static.wixstatic.com/media/f5599d_1d315f45d1444c159300e272b6d89713.jpg/v1/fill/w_1486,h_967,al_tr,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_1d315f45d1444c159300e272b6d89713.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row mt-32 m-auto space-x-2">
        <div className="flex flex-col space-y-4">
          <h2 className="absolute text-9xl font-bold text-[#313244] -translate-y-8">
            productions
          </h2>
          <h1 className="relative text-7xl font-semibold">
            <span class="text-[#D0A48C]">Breathtaking</span> Soundtracks
          </h1>
          <h3 className="text-3xl font-semibold max-w-prose leading-10">
            Seycara Music Productions is all music, all the time.
          </h3>
          <div class="flex flex-row gap-12 items-center pt-8">
            <div class="flex flex-col gap-6">
              <p className="max-w-prose text-justify">
                As Seycara's oldest department established by chief composer
                Yuang Chen in 2009. We produce everything you can imagine from a
                symphonic piece for large orchestra and choir to music matching
                that of the latest J-pop featuring Hatsune Miku. Having worked
                with many youtube channels/game developers and since established
                as a high quality, reputable OST (original soundtrack) supplier,
                Seycara's music has had over 5.5 million views on our own
                channel and countless more on others. Works by chief composer
                Yuang Chen have been performed by numerous live professional
                quality orchestras such as the Kingston Symphony Orchestra and
                the Toronto Symphony Youth Orchestra.
              </p>
              <p className="max-w-prose text-justify">
                If you are interested in working with Seycara for your next big
                film, animation, or video game soundtrack, get in touch with us
                and send us what you have that you think is relevant to your
                project; we will evaluate your project and get back to you
                within 5 business days on potential cooperation opportunities.
                We also do concert piece commissions for symphony orchestras and
                other ensembles.
              </p>
            </div>
            <div className="flex flex-col bg-[#161817] rounded-lg p-4 gap-4 min-h-full w-[45%]">
              <div
                className="text-2xl h-32 p-4 rounded-xl "
                style={{
                  background:
                    "linear-gradient( rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)), url(https://static.wixstatic.com/media/da3e72d80cbc4e09a5b20613ca199302.jpg/v1/fill/w_978,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da3e72d80cbc4e09a5b20613ca199302.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <h1>Interested in working with us?</h1>
                <div className="text-xs font-bold bg-[#a97d0d] w-32 p-2 rounded-xl mt-4 flex flex-row items-center justify-center">
                  <p>GET IN TOUCH</p>{" "}
                  <BsArrowRightShort className="inline text-xl font-bold" />
                </div>
              </div>
              <div
                className="text-2xl h-32 p-4 rounded-xl "
                style={{
                  background:
                    "linear-gradient( rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)), url(https://img.youtube.com/vi/BT9ABOe-7S0/maxresdefault.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <h1 className="">Listen to our masterpieces</h1>
                <div class="flex flex-row gap-2">
                  <div className="text-xs font-bold bg-[#a97d0d] w-48 p-2 rounded-xl mt-4 flex flex-row items-center justify-center">
                    <p>SEYCARA CONCERT HALL</p>{" "}
                    <BsArrowRightShort className="inline text-xl font-bold" />
                  </div>
                  <div className="text-xs font-bold bg-[#0da94e] w-12 p-2 rounded-xl mt-4 flex flex-row items-center justify-center">
                    <BsSpotify className="inline text-xl font-bold" />
                  </div>
                  <div className="text-xs font-bold bg-[#a90d0d] w-12 p-2 rounded-xl mt-4 flex flex-row items-center justify-center">
                    <BsYoutube className="inline text-xl font-bold" />
                  </div>
                </div>
              </div>
              <div
                className="text-2xl h-32 p-4 rounded-xl "
                style={{
                  background:
                    "linear-gradient( rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)), url(https://static.wixstatic.com/media/f5599d_21ce3d70a6aa4b819113c355c0159b97.jpg/v1/fill/w_1486,h_967,al_tl,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_21ce3d70a6aa4b819113c355c0159b97.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <h1>View our portfolio</h1>
                <div className="text-xs font-bold bg-[#a97d0d] w-24 p-2 rounded-xl mt-4 flex flex-row items-center justify-center">
                  <p>PROJECTS</p>{" "}
                  <BsArrowRightShort className="inline text-xl font-bold" />
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex flex-col items-center gap-1">
            <CgHeart className="text-[#fb83c3] text-2xl" />
            <h1 className="text-2xl text-center font-bold">
              We blast through your{" "}
              <span className="text-[#fb83c3]">expectations</span>
            </h1>
            <h1 className="text-md text-center">
              Here's what people are saying about Seycara's work
            </h1>
            <IoIosArrowDown className="my-6" />
          </div>
          <div className="pb-12 flex flex-col gap-8">
            <div>
              <div className="flex flex-col max-w-4xl">
                <h1 className="text-md text-green-400 ">
                  DesertFox - Wargirl Games - Great Britain
                </h1>
                <h1 className="text-3xl font-bold">
                  "Very professional and the music they produced was amazingly
                  high quality. Given the opportunity, I would love to work with
                  them again"
                </h1>
              </div>
            </div>
            <div className="text-right">
              <div className="flex flex-col max-w-4xl">
                <h1 className="text-md text-green-400 ">
                  Yumi Ishii - Roseverte Visual Novels - Japan
                </h1>
                <h1 className="text-3xl font-bold">
                  "This is the first time I use a paid material for my game's
                  BGM. I'm pretty nervous at first, but Seycara is easy to
                  discuss with and can handle some retakes I asked very well.
                  I'm very satisfied and their music will surely give a unique
                  touch to my" game.
                </h1>
              </div>
            </div>
            <div>
              <div className="flex flex-col max-w-4xl">
                <h1 className="text-md text-green-400 ">
                  Jim Thach - MrEpicOSTs Youtube - Australia
                </h1>
                <h1 className="text-3xl font-bold">
                  "Seycara Ocherstral's soundtracks are a variety of amazing
                  pieces, which really reminds me of a Studio Ghibi or Disney
                  film."
                </h1>
              </div>
            </div>
            <div className="text-right">
              <div className="flex flex-col max-w-4xl">
                <h1 className="text-md text-green-400 ">
                  David M. Tan - Film Director​ - United States
                </h1>
                <h1 className="text-3xl font-bold">
                  “The very talented Seycara Orchestral takes you on a sonic
                  journey from home where all is comfortable and yet riddled
                  with anticipation to epic heights where emotions and romance
                  soars through cool, new air. But as you listen and glide
                  through the many ups, downs, twists and turns, you grow
                  sentimental and reminiscent that perhaps a warm, grounded
                  place like home is where you longed to be in the end.”
                </h1>
              </div>
            </div>
            <div>
              <div className="flex flex-col max-w-4xl">
                <h1 className="text-md text-green-400 ">
                  Dagmawi Abebe - Film Director - United States
                </h1>
                <h1 className="text-3xl font-bold">
                  "I was worried about working with a composer long distance,
                  but The Seycara Orchestra did a brilliant job in bringing my
                  vision for the film to fruition. I can't wait to work with
                  them on future projects!"
                </h1>
              </div>
            </div>
            <div className="text-right">
              <div className="flex flex-col max-w-4xl">
                <h1 className="text-md text-green-400 ">
                  Jeff Ulstead - Composer - Canada
                </h1>
                <h1 className="text-3xl font-bold">
                  "The music from Seycara is simply put, outstanding."
                </h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pb-16">
            <h1 className="text-2xl text-center font-bold">
              Ready to have us <span className="text-[#fb83c3]">onboard</span>?
            </h1>
            <div className="text-xs font-bold bg-[#fb83c3] text-black w-32 p-2 rounded-xl mt-4 flex flex-row items-center justify-center f">
              <p>Let's Talk</p>{" "}
              <BsArrowRightShort className="inline text-xl font-bold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
