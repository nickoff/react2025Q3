import type { Country } from '../../types/data.type';

interface SubTableProps {
  width: number;
  country: Country;
}

export const SubTable = (props: SubTableProps) => {
  const { width, country } = props;
  const cellBorder = 'border-1 border-gray-700 p-2';

  return (
    <tr className="bg-gray-700/30 border-2 border-emerald-300/30">
      <td colSpan={4}>
        <table className="text-xl w-full">
          <colgroup>
            <col style={{ width: `${width * 0.1}px` }} />
            <col style={{ width: `${width * 0.4}px` }} />
            <col style={{ width: `${width * 0.25}px` }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th className={cellBorder}>Year</th>
              <th className={cellBorder}>Population</th>
              <th className={cellBorder}>
                CO<sub>2</sub>
              </th>
              <th className={cellBorder}>
                CO<sub>2</sub> per capita
              </th>
            </tr>
          </thead>
        </table>
        <div className="h-72 overflow-auto">
          <table className="text-xl w-full">
            <colgroup>
              <col style={{ width: `${width * 0.1}px` }} />
              <col style={{ width: `${width * 0.4}px` }} />
              <col style={{ width: `${width * 0.25}px` }} />
              <col />
            </colgroup>
            <tbody>
              {country.data.map((item, index) => {
                return (
                  <tr key={index}>
                    <th className={cellBorder}>{item.year}</th>
                    <th className={cellBorder}>{item.population}</th>
                    <th className={cellBorder}>{item.cement_co2}</th>
                    <th className={cellBorder}>{item.cement_co2_per_capita}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
};
