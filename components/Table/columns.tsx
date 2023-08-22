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
  },
  {
    accessorKey: "event_details",
    header: "Event Details",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "attendance",
    header: "Attendance",
  },
  {
    accessorKey: "discord_link",
    header: "Invite Link",
  },
];
