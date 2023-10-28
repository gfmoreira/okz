import Button from "@/components/button/Button";
import Table from "@/components/table/Table";
import Timer from "@/components/timer/Timer";

const mockToday = {
  data: {
    today: {
      firstPunching: "08:00",
      secondPunching: "12:00",
    },
  },
};

const todayPunch = Object.values(mockToday.data.today).map(
  (el: any, index: any) => {
    return (
      <div key={index} className="w-16 text-center">
        {el}
      </div>
    );
  }
);
const mock = {
  data: [
    {
      date: "16/10/2023",
      punching: {
        firstPunching: "08:00",
        secondPunching: "12:00",
        thirdPunching: "13:00",
        fourthPunching: "17:00",
      },
    },
    {
      date: "15/10/2023",
      punching: {
        firstPunching: "08:00",
        secondPunching: "12:00",
        thirdPunching: "13:00",
        fourthPunching: "17:00",
      },
    },
  ],
};

function requestDate(dateFound: string) {
  if (dateFound == "") {
    return;
  }
  var year = new Date(dateFound).getUTCFullYear();
  var month = (1 + new Date(dateFound).getMonth()).toString();
  month = month.length > 1 ? month : "0" + month;
  var day = new Date(dateFound).getDate().toString();
  day = day.length > 1 ? day : "0" + day;
  return month + "/" + day + "/" + year;
}

const date = requestDate(new Date().toString());
export default function UserView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <section className="h-12">header</section>
      <section>
        <Timer />
        <div className="flex text-center h-20 items-center justify-center">
          <Button>Marcar!</Button>
        </div>
        <div>
          <div className="text-center pb-2">{date}</div>
          <div className="flex justify-center">{todayPunch}</div>
        </div>
        <div className="p-2 text-center">----------------------</div>
        <div className="pb-2 text-center">Lasts Punches</div>
        <Table data={mock.data} />
      </section>
      <section>footer</section>
    </div>
  );
}
