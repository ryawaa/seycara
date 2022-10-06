import { BsFacebook, BsSpotify, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-row justify-center items-center w-full space-x-96 m-auto p-2">
        <div className="flex flex-row items-center m-2">
          <p className="text-sm">
            © 2009 - 2021 by Seycara Music and Arts Productions - last updated
            12/29/21 - mockup by Jariel Que @ fuwa.sh
          </p>
        </div>
        <div className="flex flex-row justify-items-end space-x-2">
          <BsSpotify />
          <BsYoutube />
          <BsTwitter />
          <BsFacebook />
        </div>
      </div>
    </footer>
  );
}
