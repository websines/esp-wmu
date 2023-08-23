import React from "react";
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

const getEventData = () => {
  return [
    {
      date: "2023-09-01",
      event_details: "Gaming Night",
      location: "Central Park",
      attendance: "150",
      discord_link: "https://discord.gg/abcd1234",
    },
    {
      date: "2023-09-05",
      event_details: "Music Jam",
      location: "West Auditorium",
      attendance: "200",
      discord_link: "https://discord.gg/efgh5678",
    },
    {
      date: "2023-09-10",
      event_details: "Tech Talk",
      location: "City Hall",
      attendance: "300",
      discord_link: "https://discord.gg/ijkl9012",
    },
    {
      date: "2023-09-15",
      event_details: "Book Reading",
      location: "Local Library",
      attendance: "80",
      discord_link: "https://discord.gg/mnop3456",
    },
    {
      date: "2023-09-20",
      event_details: "Food Festival",
      location: "East Plaza",
      attendance: "500",
      discord_link: "https://discord.gg/qrst6789",
    },
    {
      date: "2023-09-25",
      event_details: "Art Exhibition",
      location: "Museum of Art",
      attendance: "120",
      discord_link: "https://discord.gg/uvwx0123",
    },
    {
      date: "2023-09-28",
      event_details: "Film Screening",
      location: "Main Theater",
      attendance: "220",
      discord_link: "https://discord.gg/yzab4567",
    },
    {
      date: "2023-09-30",
      event_details: "Dance Workshop",
      location: "Dance Studio",
      attendance: "60",
      discord_link: "https://discord.gg/cdef7890",
    },
    {
      date: "2023-10-02",
      event_details: "Poetry Slam",
      location: "Café Poetica",
      attendance: "90",
      discord_link: "https://discord.gg/ghij2345",
    },
    {
      date: "2023-10-05",
      event_details: "Comedy Night",
      location: "Comedy Club",
      attendance: "170",
      discord_link: "https://discord.gg/klmn5678",
    },
    {
      date: "2023-09-25",
      event_details: "Art Exhibition",
      location: "Museum of Art",
      attendance: "120",
      discord_link: "https://discord.gg/uvwx0123",
    },
    {
      date: "2023-09-28",
      event_details: "Film Screening",
      location: "Main Theater",
      attendance: "220",
      discord_link: "https://discord.gg/yzab4567",
    },
    {
      date: "2023-09-30",
      event_details: "Dance Workshop",
      location: "Dance Studio",
      attendance: "60",
      discord_link: "https://discord.gg/cdef7890",
    },
  ];
};

const getYoutubeData = () => {
  return {
    videoSrc: "https://www.youtube.com/embed/ih9PBGVVOO4?si=O1G2k4lK6dkhpuZM",
    videoTitle: "YouTube video player",
    tagText: "[Something cool]",
    text: "Something",
  };
};

const getAchievementsData = () => {
  return [
    {
      imageURL: "hhjak",
      title: "Somethinf",
      date: "Spring 2027",
    },
    {
      imageURL: "hhjak",
      title: "Somethinf",
      date: "Spring 2027",
    },
    {
      imageURL: "hhjak",
      title: "Somethinf",
      date: "Spring 2027",
    },
  ];
};

const page = async () => {
  const data = await getEventData();
  const youtubeData = await getYoutubeData();
  const achievements = await getAchievementsData();
  return (
    <main
      className="min-h-screen bg-center bg-cover bg-no-repeat backdrop-blur-md overlay relative -z-10"
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

      <section className="min-h-screen text-white p-8 sm:p-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="inline-flex flex-row items-center space-x-2">
            <span>
              <hr className="h-2 w-20 border-red-500" />
            </span>{" "}
            <span className="text-3xl tracking-wide font-bold italic uppercase">
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
            <h2 className="text-3xl font-semibold tracking-widest my-4">
              Arena Address
            </h2>
            <p className="text-xl font-semibold my-4">
              798 Oakland Drive <br /> Kalamazoo, MI 49008
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen p-8 sm:p-16">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="inline-flex flex-row items-center space-x-2 text-white my-8">
            <span>
              <hr className="h-2 w-20 border-red-500" />
            </span>{" "}
            <span className="text-3xl tracking-wide font-bold italic uppercase">
              Our Values
            </span>
            <span>
              <hr className="h-1 w-20 border-red-500" />
            </span>
          </h1>
          <div className="flex flex-col justify-center items-center mt-8">
            <div className="flex flex-col-reverse sm:flex-row p-4 items-center justify-center text-white sm:w-[60%] space-x-2">
              <div className="flex flex-col space-y-2">
                <h2 className="text-6xl font-bold italic uppercase text-shadow shadow-red-500">
                  COMMUNITY
                </h2>
                <span className="text-sm text-red-900">
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
                className="rounded object-cover sm:w-56 sm:h-56  h-56 w-full mb-4 shadow-slate-950"
              ></img>
            </div>
            <hr className="h-1 sm:w-[65%] w-[80%] text-white" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col sm:flex-row p-4 items-center justify-center text-white sm:w-[60%] space-x-2">
              <img
                src="/hero.jpg"
                className="rounded object-cover sm:w-56 sm:h-56  h-56 w-full mb-4"
              ></img>
              <div className="flex flex-col space-y-2">
                <h2 className="text-6xl uppercase">Growth</h2>
                <span className="text-sm">A Warm Welcome & A New Friend</span>
                <p className="pt-4 text-md">
                  We believe in Community. From our weekly events to our annual
                  festivals and charity fundraisers, we strive to build
                  connections with one-another beyond just the realm of gaming.
                  With games serving as a common ground to meet over, we forge
                  life-long friendships and lift each other up.
                </p>
              </div>
            </div>
            <hr className="h-1 sm:w-[65%] w-[80%] text-white" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col-reverse sm:flex-row p-4 items-center justify-center text-white sm:w-[60%] space-x-2">
              <div className="flex flex-col space-y-2">
                <h2 className="text-6xl uppercase">Growth</h2>
                <span className="text-sm">A Warm Welcome & A New Friend</span>
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
                className="rounded object-cover sm:w-56 sm:h-56  h-56 w-full mb-4"
              ></img>
            </div>
            <hr className="h-1 sm:w-[65%] w-[80%] text-white" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col sm:flex-row p-4 items-center justify-center text-white sm:w-[60%] space-x-2">
              <img
                src="/hero.jpg"
                className="rounded object-cover sm:w-56 sm:h-56  h-56 w-full mb-4"
              ></img>
              <div className="flex flex-col space-y-2">
                <h2 className="text-6xl uppercase">Growth</h2>
                <span className="text-sm">A Warm Welcome & A New Friend</span>
                <p className="pt-4 text-md">
                  We believe in Community. From our weekly events to our annual
                  festivals and charity fundraisers, we strive to build
                  connections with one-another beyond just the realm of gaming.
                  With games serving as a common ground to meet over, we forge
                  life-long friendships and lift each other up.
                </p>
              </div>
            </div>
            <hr className="h-1 sm:w-[65%] w-[80%] text-white" />
          </div>
        </div>
      </section>
      <section className="min-h-screen p-8 sm:p-16">
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="inline-flex flex-row items-center space-x-2">
            <span>
              <hr className="h-2 w-20 border-red-500" />
            </span>{" "}
            <span className="text-3xl tracking-wide font-bold italic uppercase">
              Recent Achievements
            </span>
            <span>
              <hr className="h-1 w-20 border-red-500" />
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((data) => (
              <Achievements data={data} />
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen p-8 sm:p-16">
        <div className="flex flex-col justify-center items-center">
          <h1>Latest Video</h1>
          <YoutubeVideoComponent data={youtubeData} />
        </div>
      </section>
      <footer className="p-4">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h1>Follow Us</h1>
          <div className="flex flex-row justify-center items-center">
            <ul className="flex flex-row justify-center items-center space-x-4 text-red-500 text-2xl mt-4">
              <Link href="/">
                <FaTwitter />
              </Link>
              <Link href="/">
                <FaYoutube />
              </Link>
              <Link href="/">
                <FaTwitch />
              </Link>
              <Link href="/">
                <FaInstagram />
              </Link>
            </ul>
          </div>
          <span>© 2023 Club Esports at WMU</span>
        </div>
      </footer>
    </main>
  );
};

export default page;
