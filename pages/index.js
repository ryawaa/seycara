import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  BsSpotify,
  BsTwitter,
  BsYoutube,
  BsArrowRightShort,
} from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <section
      id="#"
      className="flex flex-col min-h-screen bg-cover bg-center relative m-auto"
      style={{
        background:
          "linear-gradient( rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)), url(https://static.wixstatic.com/media/f5599d_82c715fc6035416bb1e78cd97ee48435.jpg/v1/fill/w_1477,h_877,al_t,q_85,enc_auto/f5599d_82c715fc6035416bb1e78cd97ee48435.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row mt-32 m-auto space-x-2">
        <div className="flex flex-col space-y-4">
          <h2 className="absolute text-9xl font-bold text-[#313244] -translate-y-8">
            studio seycara
          </h2>
          <h1 className="relative text-7xl font-semibold">
            <span className="text-[#D0A48C]">Welcome</span> to the studio.
          </h1>
          <h3 className="text-3xl font-semibold max-w-prose leading-10">
            At Seycara Music and Arts Productions, we handle all music, fine
            art, literary, and digital mediums for your creative projects.
          </h3>
          <div class="pt-8">
            <iframe
              className="rounded-3xl mb-3"
              width="720"
              height="480"
              src="https://www.youtube.com/embed/BT9ABOe-7S0"
            ></iframe>
            <p class="text-xl my-2">
              Want more? Check out the{" "}
              <Link href="/concert-hall">
                <a className="underline cursor-pointer">
                  concert hall
                  <BsArrowRightShort className="inline text-2xl" />
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div class="flex flex-col-reverse items-end">
          <h3 className="text-xs my-4">WE DO MUSIC.</h3>
          <div className="flex flex-row items-center space-x-2 my-2">
            <h3 className="text-3xl font-semibold -translate-y-1">seycara</h3>
            <BsSpotify className="text-3xl" />
          </div>
          <div className="flex flex-row items-center space-x-2 my-2">
            <h3 className="text-3xl font-semibold -translate-y-1">@seycara</h3>
            <BsTwitter className="text-3xl" />
          </div>
          <div className="flex flex-row items-center space-x-2 my-2">
            <h3 className="text-3xl font-semibold -translate-y-1">seycara</h3>
            <BsYoutube className="text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
