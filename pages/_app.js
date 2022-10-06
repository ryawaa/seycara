import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
      <Footer />
    </>
  );
}

export default MyApp;
