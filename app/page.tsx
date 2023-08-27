import NavBar from "@/components/NavBar";
import Image from "next/image";
import { EventTable } from "@/components/Table/EventTable";
import { columns } from "@/components/Table/columns";
import Achievements from "@/components/Achievements";
import YoutubeVideoComponent from "@/components/YoutubeVideoComponent";
import {
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";
import { client } from "@/lib/sanity";

const getEventData = async () => {
  const query = `*[_type=="event"]|order(_createdAt desc)`;
  const data = await client.fetch(query);
  return data;
};

const getYoutubeData = async () => {
  const query = `*[_type=="youtubelink"]|order(_createdAt desc)`;
  const data = await client.fetch(query);
  return data;
};

const getAchievementsData = async () => {
  const query = `*[_type=="achievements"]|order(_createdAt desc)`;
  const data = await client.fetch(query);
  return data;
};

export const revalidate = 1;

const Homepage = async () => {
  const data = await getEventData();
  const youtubeData = await getYoutubeData();
  const achievements = await getAchievementsData();
  return (
    <main
      className="min-h-screen bg-center bg-cover bg-no-repeat backdrop-blur-md overlay relative"
      style={{ backgroundImage: 'url("/basic_bg_main.jpg")' }}
    >
      <NavBar />
      <section
        className="min-h-screen bg-center bg-cover relative local-overlay flex items-center justify-center"
        style={{ backgroundImage: 'url("/header_bg.jpg")' }}
      >
        <div className="text-center p-4 z-10">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
            Club Esports at WMU
          </h1>
          <p className="mt-2 text-sm md:text-base lg:text-lg text-red-500">
            Community, from Casual to Competitive
          </p>
        </div>
      </section>

      <section className="min-h-screen text-white p-8 sm:p-16" id="events">
        <div className="flex flex-col items-center justify-center">
          <h1 className="inline-flex flex-row items-center space-x-2">
            <span>
              <hr className="h-2 w-20 border-red-500" />
            </span>{" "}
            <span className="text-xl sm:text-3xl tracking-wide font-bold italic uppercase">
              Upcoming Events
            </span>
            <span>
              <hr className="h-1 w-20 border-red-500" />
            </span>
          </h1>
          <div className="m-8 w-full">
            <EventTable columns={columns} data={data} />
          </div>

          <div className="text-center z-10">
            <h2 className="text-3xl font-bold tracking-widest my-4 text-blue-400">
              Arena Address
            </h2>
            <p className="text-xl font-medium my-4 tracking-widest">
              798 Oakland Drive <br /> Kalamazoo, MI 49008
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen p-8 sm:p-16" id="about">
        <div className="flex flex-col justify-center items-center p-8">
          <h1 className="inline-flex flex-row items-center space-x-2 text-white my-8">
            <span>
              <hr className="h-2 w-20 border-red-500" />
            </span>{" "}
            <span className="text-xl sm:text-3xl tracking-wide font-bold italic uppercase">
              Our Values
            </span>
            <span>
              <hr className="h-2 w-20 border-red-500" />
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 w-full">
            {/* First Item */}
            <div className="flex flex-col sm:flex-row p-4 items-center justify-center text-white space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex flex-col space-y-2">
                <h2 className="text-4xl sm:text-6xl font-bold drop-shadow-lg italic uppercase shadow-red-500">
                  COMMUNITY
                </h2>
                <span className="text-md text-blue-500 font-bold">
                  A Warm Welcome & A New Friend
                </span>
                <p className="pt-4 text-md">
                  We believe in Community. From our weekly events to our annual
                  festivals and charity fundraisers, we strive to build
                  connections with one-another beyond just the realm of gaming.
                  With games serving as a common ground to meet over, we forge
                  life-long friendships and lift each other up.
                </p>
              </div>
              <img
                src="/hero.jpg"
                className="rounded object-cover sm:w-56 sm:h-56 h-56 w-full mb-4 shadow-slate-950"
              />
            </div>

            {/* Second Item */}
            <div className="flex flex-col sm:flex-row p-4 items-center justify-center text-white space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex flex-col space-y-2">
                <h2 className="text-4xl sm:text-6xl font-bold drop-shadow-lg italic uppercase shadow-red-500">
                  INCLUSIVITY
                </h2>
                <span className="text-md text-blue-500 font-bold">
                  For One & For All
                </span>
                <p className="pt-4 text-md">
                  We believe in Inclusivity. All are welcome in our community,
                  regardless of skill, gender, sexuality, race, or faith. We
                  accept all who are willing to treat others with respect and
                  kindness, and harbor no space for hate.
                </p>
              </div>
              <img
                src="/hero.jpg"
                className="rounded object-cover sm:w-56 sm:h-56 h-56 w-full mb-4"
              />
            </div>

            {/* Third Item */}
            <div className="flex flex-col sm:flex-row p-4 items-center justify-center text-white space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex flex-col space-y-2">
                <h2 className="text-4xl sm:text-6xl font-bold drop-shadow-lg italic uppercase shadow-red-500">
                  GROWTH
                </h2>
                <span className="text-md text-blue-500 font-bold">
                  Dedication & Improvement
                </span>
                <p className="pt-4 text-md">
                  We believe in Growth. We work to improve ourselves each day,
                  providing help and encouragement to those in our community who
                  want to do the same. Our dedication to our passions lead us to
                  our hard earned progress.
                </p>
              </div>
              <img
                src="/hero.jpg"
                className="rounded object-cover sm:w-56 sm:h-56 h-56 w-full mb-4"
              />
            </div>

            {/* Fourth Item */}
            <div className="flex flex-col sm:flex-row p-4 items-center justify-center text-white space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex flex-col space-y-2">
                <h2 className="text-4xl sm:text-6xl font-bold drop-shadow-lg italic uppercase shadow-red-500">
                  VICTORY
                </h2>
                <span className="text-md text-blue-500 font-bold">
                  Competition & Success
                </span>
                <p className="pt-4 text-md">
                  We believe in Victory. Fight on fight on for Western; over
                  one, over all we will reign. Fight, Broncos fight, fight with
                  all your might. Western win this game!
                </p>
              </div>
              <img
                src="/hero.jpg"
                className="rounded object-cover sm:w-56 sm:h-56 h-56 w-full mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen p-8 sm:p-16">
        <div className="flex flex-col justify-center items-center text-white space-y-8">
          <h1 className="inline-flex flex-row items-center space-x-2">
            <span>
              <hr className="h-2 w-20 border-red-500" />
            </span>{" "}
            <span className="text-lg sm:text-3xl tracking-wide font-bold italic uppercase">
              Recent Achievements
            </span>
            <span>
              <hr className="h-1 w-20 border-red-500" />
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((data: any) => (
              <Achievements data={data} />
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen p-8 sm:p-16">
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="inline-flex flex-row items-center space-x-2">
            <span>
              <hr className="h-2 w-20 border-red-500" />
            </span>{" "}
            <span className="text-lg sm:text-3xl tracking-wide font-bold italic uppercase text-white">
              Latest Video
            </span>
            <span>
              <hr className="h-1 w-20 border-red-500" />
            </span>
          </h1>
          <YoutubeVideoComponent data={youtubeData[0]} />
        </div>
      </section>
      <footer className="p-4">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1 className="text-blue-500 text-center text-2xl italic font-bold uppercase">
            Follow Us
          </h1>
          <div className="flex flex-row justify-center items-center">
            <ul className="flex flex-row justify-center items-center space-x-4 text-red-500 text-2xl my-4">
              <Link href="/" className="px-4">
                <FaTwitter className="w-8 h-8" />
              </Link>
              <Link href="/" className="px-4">
                <FaYoutube className="w-8 h-8" />
              </Link>
              <Link href="/" className="px-4">
                <FaTwitch className="w-8 h-8" />
              </Link>
              <Link href="/" className="px-4">
                <FaInstagram className="w-8 h-8" />
              </Link>
            </ul>
          </div>
          <span className="text-white">© 2023 Club Esports at WMU</span>
        </div>
      </footer>
    </main>
  );
};

export default Homepage;
