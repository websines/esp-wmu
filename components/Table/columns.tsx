import { ColumnDef } from "@tanstack/react-table";

export type Event = {
  date: string;
  event_details: string;
  location: string;
  attendance: string;
  discord_link: string;
};

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cellClass: "text-purple-500 font-medium",
  },
  {
    accessorKey: "event_details",
    header: "Event Details",
    cellClass:
      "text-white font-semibold uppercase tracking wide text-xl italic",
  },
  {
    accessorKey: "location",
    header: "Location",
    cellClass:
      "text-gray-200 font-semibold uppercase tracking wide text-xl italic",
  },
  {
    accessorKey: "attendance",
    header: "Attendance",
    cellClass:
      "text-red-500 font-semibold uppercase tracking wide text-xl italic",
  },
  {
    accessorKey: "discord_link",
    header: "Invite Link",
    cellClass:
      "text-red-500 font-semibold cursor-pointer tracking wide text-sm hover:scale-105 transition duration-200 ease-in-out",
  },
];
