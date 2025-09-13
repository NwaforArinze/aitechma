import { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  CircleCheck,
  Clock,
  XCircle,
  BadgeCheck,
  EllipsisVertical,
} from "lucide-react";

// ✅ Sample Data
const sampleData = [
  {
    id: 1,
    name: "Mohammed Adepoju",
    role: "Product Designer",
    status: "Accepted",
    image: "/user2.jpg",
    title: "Designer",
    scheduledDate: "11 September 2025",
    scheduledTime: "09:00 - 09:30",
    action: ["Cancel", "Reschedule"],
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Frontend Developer",
    status: "Completed",
    image: "/user2.jpg",
    title: "Designer",
    scheduledDate: "11 September 2025",
    scheduledTime: "09:00 - 09:30",
    action: ["Send Rejection", "Make Offer"],
  },
  {
    id: 3,
    name: "John Smith",
    role: "Backend Developer",
    status: "Rejected",
    image: "/user2.jpg",
    title: "Designer",
    scheduledDate: "11 September 2025",
    scheduledTime: "09:00 - 09:30",
    action: ["Cancel", "Reschedule"],
  },
  {
    id: 4,
    name: "Sarah Lee",
    role: "UI/UX Designer",
    status: "Pending",
    image: "/user2.jpg",
    title: "Designer",
    scheduledDate: "11 September 2025",
    scheduledTime: "09:00 - 09:30",
    action: ["Cancel", "Reschedule"],
  },
  {
    id: 5,
    name: "David Kim",
    role: "Project Manager",
    status: "Cancelled",
    image: "/user2.jpg",
    title: "Designer",
    scheduledDate: "11 September 2025",
    scheduledTime: "09:00 - 09:30",
    action: ["Send Rejection", "Make Offer"],
  },
  {
    id: 6,
    name: "Emily Chen",
    role: "QA Engineer",
    status: "Accepted",
    image: "/user2.jpg",
    title: "Designer",
    scheduledDate: "11 September 2025",
    scheduledTime: "09:00 - 09:30",
    action: ["Cancel", "Reschedule"],
  },
  {
    id: 7,
    name: "Michael Brown",
    role: "Fullstack Dev",
    status: "Pending",
    image: "/user2.jpg",
    title: "Designer",
    scheduledDate: "11 September 2025",
    scheduledTime: "09:00 - 09:30",
    action: ["Cancel", "Reschedule"],
  },
  {
    id: 8,
    name: "Lisa Wong",
    role: "Data Scientist",
    status: "Rejected",
    image: "/user2.jpg",
    title: "Designer",
    scheduledDate: "11 September 2025",
    scheduledTime: "09:00 - 09:30",
    action: ["Send Rejection", "Make Offer"],
  },
];

const ITEMS_PER_PAGE = 5;

export default function TalentTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);

  // Filtering logic
  const filteredData = sampleData.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.role.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === "" || row.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const actionStyles = {
    "Send Rejection": "bg-red-700 hover:bg-red-800",
    "Make Offer": "bg-green-700 hover:bg-green-800",
    Cancel: "bg-red-700 hover:bg-gray-700",
    Reschedule:
      "bg-black border-yellow-600 border hover:bg-yellow-700 text-yellow-600",
  };

  // Status Badge Component
  const StatusBadge = ({ status }) => {
    let color = "bg-gray-600";
    let Icon = null;

    if (status === "Accepted") {
      color = "bg-green-950/40 border-1 border-green-500 px-4 py-2";
      Icon = CircleCheck;
    }
    if (status === "Completed") {
      color = "bg-green-950/40 border-1 border-green-500 px-4 py-2";
      Icon = BadgeCheck;
    }

    if (status === "Pending") {
      color = "bg-yellow-600/40 border-1 border-yellow-500 px-4 py-2";
      Icon = Clock;
    }

    if (status === "Cancelled") {
      color = "bg-red-950/40 border-1 border-red-500 px-4 py-2";
      Icon = XCircle;
    }
    if (status === "Rejected") {
      color = "bg-red-950/40 border-1 border-red-500 px-4 py-2";
      Icon = XCircle;
    }

    return (
      <Badge className={`flex items-center gap-1 ${color}`}>
        {Icon && <Icon className="w-4 h-4" />}
        {status}
      </Badge>
    );
  };

  return (
    <div>
      {/* Scrollable Table Wrapper */}
      <div className="relative py-6 flex flex-col md:flex-row justify-between gap-3">
        <div className="relative w-full">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <Input
            placeholder="Search by title"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-[96%]  bg-zinc-800 text-gray-300 pl-14 border-[2px] border-[#2A2B31]"
          />
        </div>

        <Select
          value={statusFilter}
          onValueChange={(val) => {
            setStatusFilter(val);
            setPage(1);
          }}
        >
          <SelectTrigger className="md:w-1/10.5 text-gray-300 border-none">
            <SelectValue
              placeholder={
                <>
                  <span className="text-gray-400">Filter by: </span>
                  <span className="font-bold">All</span>
                </>
              }
            />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-none text-gray-300">
            <SelectItem className="hover:bg-gray-950" value="All">
              All
            </SelectItem>
            <SelectItem className="hover:bg-gray-950" value="Accepted">
              Accepted
            </SelectItem>
            <SelectItem className="hover:bg-gray-950" value="Pending">
              Pending
            </SelectItem>
            <SelectItem className="hover:bg-gray-950" value="Rejected">
              Rejected
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="relative mx-auto max-h-[600px] w-[370px] md:w-full overflow-x-auto rounded-lg border border-[#2A2B31]">
        {/* Table */}
        <Table>
          <TableHeader className="bg-[#1C1D22] z-10 p-2">
            <TableRow className="text-gray-300  border-b-[#2A2B31]">
              <TableHead className="text-gray-300">S/N</TableHead>
              <TableHead className="text-gray-300">Talent</TableHead>
              <TableHead className="text-gray-300">Request Title</TableHead>
              <TableHead className="text-gray-300">Status</TableHead>
              <TableHead className="text-gray-300">Scheduled Date</TableHead>
              <TableHead className="text-gray-300">Scheduled Time</TableHead>
              <TableHead className="text-end mr-3 text-gray-300">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={row.id}
                  className={`align-middle border-none transition ${
                    rowIndex % 2 === 0 ? "bg-[#1C1D22]" : "bg-zinc-800"
                  } hover:bg-gray-700`}
                >
                  <TableCell className="text-gray-300 py-8">{row.id}</TableCell>
                  <TableCell className="text-gray-300 flex items-center gap-2 mt-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={row.image}
                        alt={row.name}
                        className="w-9 h-9 rounded-full"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <strong>{row.name}</strong>
                      <span className="text-xs">{row.role}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">{row.title}</TableCell>
                  <TableCell>
                    <StatusBadge status={row.status} />
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {row.scheduledDate}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {row.scheduledTime}
                  </TableCell>

                  <TableCell className="text-right text-gray-300">
                    <div className="inline-flex flex-wrap justify-end gap-2">
                      {Array.isArray(row.action) &&
                        row.action.map((action, index) => {
                          // 👇 Check status
                          const isDisabledStatus =
                            row.status === "Cancelled" ||
                            row.status === "Rejected";

                          const actionClass = isDisabledStatus
                            ? "bg-gray-800 text-gray-400 cursor-not-allowed"
                            : actionStyles[action] ||
                              "bg-gray-700 hover:bg-gray-800";

                          return (
                            <span
                              key={index}
                              className={`text-sm px-3 py-1 rounded cursor-pointer transition-colors duration-200 ${actionClass}`}
                            >
                              {action}
                            </span>
                          );
                        })}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-gray-400">
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination  */}
      <div className="flex justify-between items-center pt-4">
        <Button
          variant="outline"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="bg-gray-800 text-gray-300 border-gray-700"
        >
          Previous
        </Button>

        <span className="text-gray-300">
          Page {page} of {totalPages}
        </span>

        <Button
          variant="outline"
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="bg-gray-800 text-gray-300 border-gray-700"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
