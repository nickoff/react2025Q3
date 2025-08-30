import { useEffect, useRef, useState } from 'react';
import { getData } from '../../utils/getData';
import type { Country } from '../../types/data.type';
import { SubTable } from './SubTable';

export const DataTable = ({ width }: { width: number }) => {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [extendedIndex, setExtendedIndex] = useState<number | null>(null);

  const cellBorder = 'border-1 border-gray-700 p-2';

  useEffect(() => {
    getData().then(({ data }) => {
      setData(data || []);
      setLoading(false);
    });
  }, []);

  const toggleRow = (index: number) => {
    setExtendedIndex((prev) => (prev === index ? null : index));
  };

  if (loading)
    return (
      <table className="text-xl">
        <tbody>
          <tr>
            <td colSpan={4}>Loading...</td>
          </tr>
        </tbody>
      </table>
    );

  return (
    <div className="h-[60vh] overflow-auto">
      <table className="text-xl w-full">
        <colgroup>
          <col style={{ width: `${width * 0.1}px` }} />
          <col style={{ width: `${width * 0.4}px` }} />
          <col style={{ width: `${width * 0.25}px` }} />
          <col />
        </colgroup>
        <tbody>
          {data.map((country, index) => {
            const latestYearData = country.data.reduce((a, b) => (b.year > a.year ? b : a));
            return (
              <>
                <tr
                  key={index}
                  onClick={() => toggleRow(index)}
                  className={`${(index % 2 && 'bg-gray-700') || (extendedIndex === index && 'bg-emerald-300/30')} cursor-pointer hover:bg-emerald-300/30`}>
                  <td className={cellBorder}>{index + 1}</td>
                  <td className={cellBorder}>{country.name}</td>
                  <td className={cellBorder}>{latestYearData.population}</td>
                  <td className={cellBorder}>{country.iso_code || 'N/A'}</td>
                </tr>
                {extendedIndex === index && <SubTable country={country} width={width} />}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export const Spreadsheet = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const [tableWidth, setTableWidth] = useState(0);

  useEffect(() => {
    if (tableRef.current) {
      setTableWidth(tableRef.current.offsetWidth);
    }
  }, []);

  const cellBorder = 'border-1 border-gray-300 bg-gray-500 p-2';
  const headerCols = ['#', 'Name of the country', 'Population', 'ISO code'];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full">
        <table ref={tableRef} className="text-xl">
          <colgroup>
            <col className="w-[10%]" />
            <col className="w-[40%]" />
            <col className="w-[25%]" />
            <col className="w-[25%]" />
          </colgroup>
          <thead>
            <tr>
              {headerCols.map((col, index) => (
                <th key={index} className={cellBorder}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <DataTable width={tableWidth} />
      </div>
    </div>
  );
};
