export const Spreadsheet = () => {
  const cellBorder = 'border-1 border-gray-700 p-2';
  const headerCols = ['#', 'Name of the country', 'Population', 'ISO code'];

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col w-full">
        <table className="text-xl">
          <thead>
            <tr className="border-1 border-gray-700">
              {headerCols.map((col, index) => (
                <th key={index} className={cellBorder}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};
