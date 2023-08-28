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
import Values from "@/components/Values";

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
const getValuesData = async () => {
  const query = `*[_type=="values"]|order(_createdAt desc)`;
  const data = await client.fetch(query);
  return data;
};

const getLogoData = async () => {
  const query = `*[_type=="logo"]|order(_createdAt desc)`;
  const data = await client.fetch(query);
  return data;
};

export const revalidate = 1;

const Homepage = async () => {
  const data = await getEventData();
  const youtubeData = await getYoutubeData();
  const achievements = await getAchievementsData();
  const values = await getValuesData();
  const logo = await getLogoData();
  return (
    <main
      className="min-h-screen bg-center bg-cover bg-no-repeat backdrop-blur-md overlay relative"
      style={{ backgroundImage: 'url("/basic_bg_main.jpg")' }}
    >
      <NavBar data={logo} />
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

      <section className="min-h-screen text-white p-4 sm:p-16 mt-8" id="events">
        <div className="flex flex-col items-center justify-center">
          <h1 className="inline-flex flex-row items-center space-x-2">
            <span>
              <hr className="h-2 w-16 sm:w-20 border-red-500" />
            </span>{" "}
            <span className="text-xl sm:text-3xl tracking-wide font-bold italic uppercase">
              Upcoming Events
            </span>
            <span>
              <hr className="h-1 w-16 sm:w-20 border-red-500" />
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
      <section className="min-h-screen p-4 sm:p-16" id="about">
        <div className="flex flex-col justify-center items-center sm:p-8">
          <h1 className="inline-flex flex-row items-center space-x-2 text-white my-8">
            <span>
              <hr className="h-2 w-16 sm:w-20 border-red-500" />
            </span>{" "}
            <span className="text-xl sm:text-3xl tracking-wide font-bold italic uppercase">
              Our Values
            </span>
            <span>
              <hr className="h-2 w-16 sm:w-20 border-red-500" />
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
            {values.map((data: any) => (
              <Values data={data} />
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen p-4 sm:p-16">
        <div className="flex flex-col justify-center items-center text-white space-y-8">
          <h1 className="inline-flex flex-row items-center space-x-2">
            <span>
              <hr className="h-2 w-12 sm:w-20 border-red-500" />
            </span>{" "}
            <span className="text-lg sm:text-3xl tracking-wide font-bold italic uppercase">
              Recent Achievements
            </span>
            <span>
              <hr className="h-1 w-12 sm:w-20 border-red-500" />
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((data: any) => (
              <Achievements data={data} />
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen p-4 sm:p-16">
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="inline-flex flex-row items-center space-x-2">
            <span>
              <hr className="h-2 w-16 sm:w-20 border-red-500" />
            </span>{" "}
            <span className="text-lg sm:text-3xl tracking-wide font-bold italic uppercase text-white">
              Latest Video
            </span>
            <span>
              <hr className="h-1 w-16 sm:w-20 border-red-500" />
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
