import { Card, CardContent } from "@/components/ui/card";
import { CalendarDaysIcon, ClockIcon } from "lucide-react";
import { useParams } from "next/navigation";

type props = {
  name: string;
  user: string;
  date: string;
  time: string;
}
export const TicketCard = ({ name, user, date, time }: props) => {
  const params = useParams();
  console.log(params);
  return (
    <Card className="w-full max-w-md border border-gray-200 shadow-sm dark:border-gray-800 dark:shadow-none">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="space-y-1">
            <h2 className="text-3xl font-bold">{user}</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <CalendarDaysIcon className="h-4 w-4" />
              <span>{date}</span>
              <ClockIcon className="h-4 w-4" />
              <span>{time}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}