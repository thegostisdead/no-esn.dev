import {Hero} from "@/app/hero";
import {Explanation} from "@/app/explanation";
import {Pricing} from "@/app/pricing";
import {Review} from "@/app/review";
import {Faq} from "@/app/faq";
import {Footer} from "@/app/footer";
import {Navbar} from "@/app/Navbar";


export default function LandingPage() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Explanation/>
      <Pricing/>
      <Review/>
      <Faq/>
      <Footer/>
    </>
  );
}
