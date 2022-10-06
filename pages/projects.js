import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CgHeart } from "react-icons/cg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";

export default function Projects() {
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
          <div className="space-y-4">
            <h2 className="absolute text-9xl font-bold text-[#313244] -translate-y-8">
              portfolio.
            </h2>
            <h1 className="relative text-7xl font-semibold">
              We&apos;ve worked with the{" "}
              <span class="text-[#D0A48C]">best</span>
            </h1>
            <h3 className="text-3xl font-semibold max-w-prose leading-10">
              with astonishing awards along the way
            </h3>
          </div>
          <div className="pt-8">
            <div className="flex flex-col items-center gap-1">
              <FaHandsHelping className="text-[#fb83c3] text-2xl" />
              <h1 className="text-2xl text-center font-bold">
                We&apos;ll work together,{" "}
                <span className="text-[#fb83c3]">hand in hand</span>.
              </h1>
              <h1 className="text-md text-center">
                Some partners in crime that we&apos;ve worked with
              </h1>
            </div>
            <h4 className="text-xl mb-4"></h4>
            <div class="grid grid-cols-3 gap-3">
              <Image
                className="object-scale-down bg-[#dfcbcd] rounded-3xl"
                src="https://static.wixstatic.com/media/f5599d_638ceebba9464667911ec72192b85c7f.png/v1/fill/w_275,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_638ceebba9464667911ec72192b85c7f.png"
                alt="Forge Animation"
                width="90"
                height="90"
              />
              <Image
                className="object-scale-down bg-[#7d0100] rounded-3xl"
                src="https://static.wixstatic.com/media/f5599d_ec73dc700cc945e2b7a0b88614221001.png/v1/fill/w_351,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_ec73dc700cc945e2b7a0b88614221001.png"
                alt="WarGirl"
                width="150"
                height="150"
              />
              <Image
                className="object-scale-down bg-[#631c1c] rounded-3xl"
                src="https://static.wixstatic.com/media/f5599d_b6d97e5286034e858972ae1eada47a56.png/v1/fill/w_244,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_b6d97e5286034e858972ae1eada47a56.png"
                alt="CDS"
                width="150"
                height="150"
              />
              <Image
                className="object-scale-down bg-[#907e89] rounded-3xl"
                src="https://static.wixstatic.com/media/f5599d_eb326d395f794ec0aff1288b99132769.png/v1/fill/w_321,h_106,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_eb326d395f794ec0aff1288b99132769.png"
                alt="Meowl"
                width="150"
                height="150"
              />
              <Image
                className="object-scale-down bg-[#282828] rounded-3xl"
                src="https://static.wixstatic.com/media/f5599d_32f6b34dbef044f69a96d74da5b35766.png/v1/fill/w_392,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_32f6b34dbef044f69a96d74da5b35766.png"
                alt="Shibuya Productions"
                width="150"
                height="150"
              />
              <Image
                className="object-scale-down bg-[#aa3e0c] rounded-3xl"
                src="https://static.wixstatic.com/media/f5599d_b66193b0122d4e4e8eb921a24cd11a44.png/v1/fill/w_187,h_233,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f5599d_b66193b0122d4e4e8eb921a24cd11a44.png"
                alt="Upset Games"
                width="75"
                height="75"
              />
            </div>
          </div>
          <div className="pt-8">
            <div className="flex flex-col items-center gap-1 ">
              <AiOutlineClockCircle className="text-[#fb8383] text-2xl" />
              <h1 className="text-2xl text-center font-bold">Our Timeline</h1>
            </div>
            <hr className="my-4"></hr>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2022</h5>
                <h6 className="text-xl text-right">ONGOING</h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white rounded-t-full"></div>
              <ul className="pb-6">
                <li id="2022">
                  <ul>
                    <li className="mt-2 text-xs">SINCE 2022</li>
                    <li>
                      <ul>
                        <li>Deemo II Original Soundtrack</li>
                        <li>Feudal Lands Original Soundtrack</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li id="2021">
                  <ul>
                    <li className="mt-4 text-xs">SINCE 2021</li>
                    <li>
                      <ul>
                        <li>Demon Rush Animation Original Soundtrack</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li id="2020">
                  <ul>
                    <li className="mt-4 text-xs">SINCE 2020</li>
                    <li>
                      <ul>
                        <li>Hoa - Apple Arcade Title Soundtrack</li>
                        <li>
                          SpongeBob The Anime by Narmak - YouTube Animation
                          Soundtrack
                        </li>
                        <li>Keyword - Video Game Soundtrack</li>
                        <li>
                          The Path to King by Hartova Maverick - Animation
                          Soundtrack
                        </li>
                        <li>YouTube Critique and discussion video series</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2020</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="mt-2 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>Everlasting Summer Album</li>
                        <li>Illusions of the Heart Album</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2019</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-12">
                <li>
                  <ul>
                    <li className="mt-2 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>
                          Festival of Lights - Concertino for Bassoon and
                          Orchestra
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2018</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="mt-2 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>
                          Remember Me - Concert Piece for English Horn and
                          Orchestra
                        </li>
                        <li>
                          Queen&apos;s University Faculty of Music Course Design
                          - Orchestration for Modern Media
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2017</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="mt-2 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>
                          Etobicoke Philharmonic Orchestra - Concert Feature
                          Piece - "The Golden Waltz"
                        </li>
                        <li>
                          The Girl Who Became An Angel - Song for Orchestra and
                          Vocalist
                        </li>
                        <li>
                          Kingston Symphony Orchestra - Concert Feature Piece -
                          "Le porcelet de valse"
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2016</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="mt-2 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>Starnova - Visual Novel Original Soundtrack</li>
                        <li>Conflict Genesis OST - PvP Video Game</li>
                        <li>Smash Bros Legacy XP - Trailer Theme</li>
                        <li>The Good Life - Short Film Original Soundtrack</li>
                        <li>
                          Dundas Valley Symphony Orchestra - Feature Concert
                          Piece
                        </li>
                        <li>
                          Café 0 - "The Sleeping Beast" - Visual Novel Original
                          Soundtrack
                        </li>
                        <li>
                          Kiwanis Music Festival - Best orchestral piece award
                          "7 landscapes from a dream" (Since 2012)
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2015</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="mt-2 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>Smash Bros Legacy M - Theme</li>
                        <li>Change! - Otome Visual Novel Soundtrack</li>

                        <li>
                          No One But You - Visual Novel Credits Song Soundtrack
                        </li>

                        <li>
                          Over The Hills And Far Away - Visual Novel Soundtrack
                        </li>

                        <li>Windwalkers Animation - Trailer Music</li>
                        <li>Hitting on the Break - Short Film</li>
                        <li>Light Speed - Mobile Game Music</li>
                        <li>Rblocks - Video Game Music</li>
                        <li>QTV Intro Theme - Television News Network Music</li>
                        <li>
                          Jenny OST - Short Film -
                          https://www.facebook.com/shortfilmjenny
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2014</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="mt-2 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>
                          Ottawa Youth Orchestra - "Orchestral Suite no.1
                          abridged"
                        </li>
                        <li>
                          Toronto Symphony Orchestra Association - TSYO open
                          call winner "Ouverture diabolique"
                        </li>
                        <li>
                          Free the Children/Me to We - National We Day Orchestra
                          Direction
                        </li>
                        <li>SH4 - Action film by Smiling Pig Productions</li>

                        <li>
                          ​Ottawa Festival Symphony - Feature Concert Piece
                        </li>
                        <li>Cavern Simulator - In house video game</li>
                        <li>A Goose's Tale - In house musical</li>
                        <li>
                          Colonel By Secondary School - Feature concert piece
                          "Sunset"
                        </li>
                        <li>Soundtracks of Wonder - In house CD Publication</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2013</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="text-xs mt-2">AWARDS</li>
                    <li>
                      <ul>
                        <li>
                          Kiwanis Music Festival - Best symphonic/overall music
                          award "Orchestral Suite no.1"{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="mt-4 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>Population dynamics - a Documentary on China </li>
                        <li>JMaster9000 - In house video game </li>
                        <li>Ottawa Festival Symphony - Music direction </li>
                        <li>Animeka Japan - Theme music composition </li>
                        <li>
                          Colonel By Secondary School - Music arrangement{" "}
                        </li>
                        <li>FlagRunner - In house video game </li>
                        <li>Sierra Leone - a Documentary </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2012</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="text-xs mt-2">AWARDS</li>
                    <li>
                      <ul>
                        <li>
                          Kiwanis Music Festival - Best symphonic/overall music
                          award "Adagio & Waltz"
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li className="mt-4 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>A Green Christmas - In house film </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2011</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="mt-2 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>
                          Youtube Symphony Orchestra - Editorial consulting
                        </li>
                        <li>Kanata Symphony Orchestra - Music arrangement</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-4xl font-semibold text-right">2010</h5>
                <h6 className="text-xl text-right"></h6>
              </div>
              <div className="w-1 border border-solid border-white bg-white "></div>
              <ul className="pb-6">
                <li>
                  <ul>
                    <li className="mt-2 text-xs">PROJECTS</li>
                    <li>
                      <ul>
                        <li>
                          Cory McPherson Regional Composition Festival -
                          Programmatic background music{" "}
                        </li>
                        <li>
                          WEJ Elementary School Chorus - Music
                          arrangement/composition feature{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="flex flex-row gap-4">
              <div className="w-32">
                <h5 className="text-xs font-semibold text-right">✨</h5>
              </div>
              <div className="w-1 border border-solid border-white bg-white mb-12 rounded-b-full "></div>
              <p className="mb-12 text-xs">YOU'VE REACHED THE END</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
