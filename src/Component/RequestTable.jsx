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
import { Search, SquarePen } from "lucide-react";

// ✅ Sample Data
const sampleData = [
  {
    id: 1,
    name: "Mohammed Adepoju",
    role: "Product Designer",
    location: "Lagos, Nigeria",
    seniority: "Mid-Level",
    minYear: "3 years",
    type: "Full-time",
    mode: "Remote",
    schedule: "Daily",
    minPay: "7,000",
    maxPay: "10,000",
    title: "Designer",
    action: "Recommnendations",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "Frontend Developer",
    location: "Lagos, Nigeria",
    seniority: "Senior",
    minYear: "5 years",
    type: "Contract",
    mode: "Remote",
    schedule: "Weekly",
    minPay: "6,000",
    maxPay: "9,000",
    title: "Designer",
    action: "Advice",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Backend Developer",
    location: "Lagos, Nigeria",
    seniority: "Mid-Level",
    minYear: "4 years",
    type: "Full-time",
    mode: "Remote",
    schedule: "Weekly",
    minPay: "8000",
    maxPay: "12000",
    title: "Designer",
    action: "Endorsenents",
  },
  {
    id: 4,
    name: "Sarah Lee",
    role: "UI/UX Designer",
    location: "Lagos, Nigeria",
    seniority: "Junior",
    minYear: "2 years",
    type: "Contract",
    mode: "Remote",
    schedule: "Daily",
    minPay: "5000",
    maxPay: "7000",
    title: "Designer",
    action: "Advice",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Project Manager",
    location: "Lagos, Nigeria",
    seniority: "Senior",
    minYear: "6 years",
    type: "Full-time",
    mode: "Remote",
    schedule: "Monthly",
    minPay: "10,000",
    maxPay: "15,000",
    title: "Designer",
    action: "Recommendations",
  },
  {
    id: 6,
    name: "Emily Chen",
    role: "QA Engineer",
    location: "Lagos, Nigeria",
    seniority: "Mid-Level",
    minYear: "3 years",
    type: "Full-Time",
    mode: "Remote",
    schedule: "Daily",
    minPay: "7000",
    maxPay: "9000",
    title: "Designer",
    action: "Endorsenents",
  },
  {
    id: 7,
    name: "Michael Brown",
    role: "Fullstack Dev",
    location: "Lagos, Nigeria",
    seniority: "Junior",
    minYear: "1 year",
    type: "Contract",
    mode: "Remote",
    schedule: "Weekly",
    minPay: "5000",
    maxPay: "7000",
    title: "Designer",
    action: "Advice",
  },
  {
    id: 8,
    name: "Lisa Wong",
    role: "Data Scientist",
    location: "Lagos, Nigeria",
    seniority: "Senior",
    minYear: "5 years",
    type: "Full Time",
    mode: "Remote",
    schedule: "Weekly",
    minPay: "8,500",
    maxPay: "12,000",
    title: "Designer",
    action: "Recommendations",
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

  return (
    <div>
      {/* Scrollable Table Wrapper */}
      <div className="relative py-6 flex flex-col md:flex-row justify-between gap-3">
        <Search
          size={16}
          className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <Input
          placeholder="Search by title"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="md:w-6/7 bg-zinc-800 text-gray-300 pl-14 border border-[#2A2B31]"
        />

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

      <div className="relative max-h-[600px] overflow-y-auto rounded-lg border border-[#2A2B31]">
        {/* Table */}
        <Table>
          <TableHeader className="bg-[#1C1D22] z-10 p-2">
            <TableRow className="border-b-[#2A2B31]">
              <TableHead className="text-gray-300">S/N</TableHead>
              <TableHead className="text-gray-300">Title</TableHead>
              <TableHead className="text-gray-300">Specialization</TableHead>
              <TableHead className="text-gray-300">Location</TableHead>
              <TableHead className="text-gray-300">Seniority</TableHead>
              <TableHead className="text-gray-300">Min. Year</TableHead>
              <TableHead className="text-gray-300">Type</TableHead>
              <TableHead className="text-gray-300">Mode</TableHead>
              <TableHead className="text-gray-300">Scheduled</TableHead>
              <TableHead className="text-gray-300">Min. Pay</TableHead>
              <TableHead className="text-gray-300">Max. Pay</TableHead>
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
                  <TableCell className="text-gray-300 py-8">
                    {row.title}
                  </TableCell>
                  <TableCell className="text-gray-300 py-8">
                    {row.role}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {row.location}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {row.seniority}
                  </TableCell>
                  <TableCell className="text-gray-300">{row.minYear}</TableCell>
                  <TableCell className="text-gray-300">{row.type}</TableCell>
                  <TableCell className="text-gray-300">{row.mode}</TableCell>
                  <TableCell className="text-gray-300">
                    {row.schedule}
                  </TableCell>
                  <TableCell className="text-gray-300">${row.minPay}</TableCell>
                  <TableCell className="text-gray-300">{row.maxPay}</TableCell>

                  <TableCell className="text-right text-gray-300">
                    <div className="inline-flex items-center justify-end gap-2">
                      <SquarePen />
                      <div className="bg-black border-yellow-600 border hover:bg-yellow-700 text-yellow-600 rounded px-2 py-1">
                        {row.action}
                      </div>
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
