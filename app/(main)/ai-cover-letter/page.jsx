
import Link from "next/link";
import { Plus } from "lucide-react";
import CoverLetterList from "./_components/cover-letter-list";
import { Button } from "@/components/ui/button";
import { getCoverLetters } from "@/actions/cover-letter";


export default async function CoverLetterPage() {
  const coverLetters = await getCoverLetters();

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">My Cover Letters</h1>
        <Link href="/ai-cover-letter/new">
          <Button className="cursor-pointer">
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}