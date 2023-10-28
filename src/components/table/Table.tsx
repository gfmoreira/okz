import TableProps from "./Table.module";

export default function Table(props: TableProps) {
  const datas = props.data.map((el: any, index: any) => {
    const punchingDate = el.date;
    return (
      <table key={index}>
        <tr className="text-center " key={index}>
          {punchingDate}
        </tr>
        <tr className="flex pb-2" key={index}>
          {Object.values(el.punching).map((ele: any) => (
            <td className="w-16 text-center" key={index}>
              {ele}
            </td>
          ))}
        </tr>
      </table>
    );
  });

  return <div>{datas}</div>;
}
