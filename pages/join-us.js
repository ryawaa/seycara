import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function JoinUs() {
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
            join us.
          </h2>
          <h1 className="relative text-7xl font-semibold">
            Join <span class="text-[#D0A48C]">Seycara</span>
          </h1>
          <h3 className="text-3xl font-semibold leading-10">
            Thank you for interest in joining Seycara; after all, what we do
            here is pretty cool...
          </h3>
          <div class="flex flex-row items-center pt-8 gap-8">
            <div class="flex flex-col gap-4">
              <p className="max-w-prose text-justify">
                Here are some positions that we are currently recruiting for.
                All position applications require the submission of a resume and
                a portfolio of relevant works (a cover letter is optional but
                recommended). Remember, we never require formal education in any
                application; what we value the most is your portfolio showing
                what you are capable of. However, degrees and other
                certifications can count towards your favour provided your
                portfolio is excellent.
              </p>
              <p className="max-w-prose text-justify">
                Also, our positions here at Seycara are not full time jobs.
                Being a part of Seycara does not require any regular "9-5" hours
                and if you have no active projects with us, you don't have to do
                any work with us. If you do work on projects with Seycara (in
                house or external), you are required to put in full commitment
                and stick to deadlines as required. Any monetary compensation
                will be distributed fairly among involved members with a 20%
                studio fee that is used for promotion and maintenance of
                Seycara.
              </p>
              <p className="max-w-prose text-justify">
                If any of these positions interest you, please send in your
                application materials to Info@seycara.com. We will review them
                as soon as possible and get back to you within a maximum time of
                2 weeks. Afterwards, you may be contacted for an interview on
                skype and your application status will be made known to you
                within a month of applying.
              </p>
            </div>
            <div className="flex flex-col bg-[#161817] rounded-lg p-4 gap-2 min-h-full w-[45%]">
              <h1 className="text-2xl">Available positions</h1>
              <h6 className="text-xs">
                There are no positions available right now as we&apos;re not
                searching for talent.
              </h6>

              <div class="flex flex-row gap-2 hidden">
                <div className="rounded-lg p-4 w-full bg-[#2e2e2e]">
                  <h3 className="text-xs"> PROJECT BASED</h3>
                  <h3 className="text-lg">Web Developer</h3>
                  <hr className="my-2" />
                  <h3 className="text-sm">this is a test role description.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
