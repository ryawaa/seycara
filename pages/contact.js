import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { BsFacebook, BsSpotify, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdMarkunreadMailbox } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="#"
      className="flex flex-col min-h-screen bg-cover bg-center relative m-auto"
      style={{
        background:
          "linear-gradient( rgba(0, 0, 0, 0.7),  rgba(0, 0, 0, 0.7)), url(https://static.wixstatic.com/media/f5599d_622500a4702742399a4c75c6da4fda6c.jpg/v1/fill/w_1486,h_967,al_tl,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_622500a4702742399a4c75c6da4fda6c.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row mt-32 m-auto space-x-2">
        <div className="flex flex-col space-y-4">
          <h2 className="absolute text-9xl font-bold text-[#313244] -translate-y-8">
            contact
          </h2>
          <h1 className="relative text-7xl font-semibold">
            Contact <span class="text-[#D0A48C]">Us</span>
          </h1>
          <h3 className="text-3xl font-semibold max-w-prose leading-10">
            Have something an opportunity you want to discuss? Maybe an inquiry
            or just want to talk to us? Let&apos;s keep in touch!
          </h3>
          <div class="flex flex-row items-center pt-16 gap-64">
            <div className="flex flex-col space-y-4">
              <h3 className="text-4xl font-semibold max-w-prose leading-10">
                Let&apos;s communicate!
              </h3>
              <div className="flex flex-col ">
                <div className="flex flex-row items-center gap-2">
                  <BsFacebook />
                  <p className="text-xs "> FACEBOOK (CLICK ME) </p>
                </div>
                <p className="text-xl">Seycara Orchestral</p>
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-row items-center gap-2">
                  <BsTwitter />
                  <p className="text-xs "> TWITTER (CLICK ME) </p>
                </div>
                <p className="text-xl">@Seycara</p>
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-row items-center gap-2">
                  <AiFillMail />
                  <p className="text-xs "> EMAIL </p>
                </div>
                <p className="text-xl">info@seycara.com</p>
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-row items-center gap-2">
                  <AiFillPhone />
                  <p className="text-xs "> TELEPHONE </p>
                </div>
                <p className="text-xl">available upon request</p>
              </div>
              <div className="flex flex-col ">
                <div className="flex flex-row items-center gap-2">
                  <MdMarkunreadMailbox />
                  <p className="text-xs "> MAILING ADDRESS </p>
                </div>
                <p className="text-xl">
                  available upon special request/reasont
                </p>
              </div>
            </div>
            <form action="/send-data-here" method="post">
              <div className="flex flex-col bg-[#161817] rounded-lg p-4 gap-2">
                <h1 className="text-2xl">Or you can use this form!</h1>
                <h6 className="text-xs">Fields marked with * are required.</h6>
                <div class="flex flex-row gap-2">
                  <input
                    className="rounded-lg p-2 bg-[#2e2e2e]"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name *"
                  />
                  <input
                    className="rounded-lg p-2 bg-[#2e2e2e]"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email *"
                  />
                </div>
                <input
                  className="rounded-lg p-2 bg-[#2e2e2e]"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
                <label for="message">Message</label>
                <textarea
                  className="rounded-lg p-2 bg-[#2e2e2e] h-32 "
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Say Hi!"
                />

                <button className="bg-[#2e2e2e] p-2 rounded-lg" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
