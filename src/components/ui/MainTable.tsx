import { useEffect, useRef, useState } from 'react';
import type { Country } from '../../types/data.type';
import { Loading } from './Loading';
import { SubTable } from './SubTable';
import React from 'react';

interface MainTableProps {
  data: Country[];
  isLoading: boolean;
}

export const MainTable = (props: MainTableProps) => {
  const { data, isLoading } = props;
  const [extendedIndex, setExtendedIndex] = useState<number | null>(0);
  const tableRef = useRef<HTMLTableElement>(null);
  const [width, setWidth] = useState(0);

  const cellBorder = 'border-1 border-gray-700 p-2';
  const cellBorderHeader = 'border-1 border-gray-300 bg-gray-500 p-2';
  const headerCols = ['#', 'Name of the country', 'Population', 'ISO code'];

  useEffect(() => {
    if (tableRef.current) {
      setWidth(tableRef.current.offsetWidth);
    }
  }, [isLoading]);

  const toggleRow = (index: number) => {
    setExtendedIndex((prev) => (prev === index ? null : index));
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col w-full">
      <table ref={tableRef} className="text-xl">
        <colgroup>
          <col className="w-[10%]" />
          <col className="w-[40%]" />
          <col className="w-[25%]" />
          <col />
        </colgroup>
        <thead>
          <tr>
            {headerCols.map((col, index) => (
              <th key={index} className={cellBorderHeader}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="h-[60vh] overflow-auto">
        <table className="text-xl w-full">
          <colgroup>
            <col style={{ width: `${width * 0.1}px` }} />
            <col style={{ width: `${width * 0.4}px` }} />
            <col style={{ width: `${width * 0.25}px` }} />
            <col />
          </colgroup>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td className={cellBorder} colSpan={4}>
                  Oops! No data! Try reset filters!
                </td>
              </tr>
            )}
            {data.length > 0 &&
              data.map((country, index) => {
                const latestYearData = country.data.reduce((a, b) => (b.year > a.year ? b : a));
                return (
                  <React.Fragment key={index}>
                    <tr
                      key={index}
                      onClick={() => toggleRow(index)}
                      className={`${(index % 2 && 'bg-gray-700') || (extendedIndex === index && 'bg-emerald-300/30')} cursor-pointer transition-colors duration-300 hover:bg-emerald-300/30`}>
                      <td className={cellBorder}>{index + 1}</td>
                      <td className={cellBorder}>{country.name}</td>
                      <td className={cellBorder}>{latestYearData.population || 'N/A'}</td>
                      <td className={cellBorder}>{country.iso_code || 'N/A'}</td>
                    </tr>
                    {extendedIndex === index && <SubTable countryData={country.data} width={width} />}
                  </React.Fragment>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
