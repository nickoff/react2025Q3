import { useAppSelector } from '../../store/hooks';
import { selectFormLastIdValue, selectFormSubmissionsValue } from '../../store/reducers/formSlice';

export const FormSubmissionList = () => {
  const formList = useAppSelector(selectFormSubmissionsValue);
  const lastFormId = useAppSelector(selectFormLastIdValue);
  const sortedFormList = [...formList].sort((a, b) => {
    if (a.id === lastFormId) return -1;
    if (b.id === lastFormId) return 1;
    return 0;
  });

  return (
    <div className="flex h-full items-center justify-center gap-5 flex-wrap">
      {sortedFormList.length === 0 && <p>No items</p>}
      {sortedFormList &&
        sortedFormList.map((form) => {
          return (
            <div
              className={`flex bg-gray-700 relative border-2 p-5 rounded-md gap-5 ${form.id === lastFormId ? 'border-amber-300/50' : 'border-gray-400'}`}
              key={form.id}>
              {form.id === lastFormId && (
                <p className="font-bold uppercase absolute text-[10px] top-2 right-2 bg-amber-300 text-gray-500 p-1 rounded-xs">
                  recent
                </p>
              )}
              <div className="flex text-base flex-col text-sx gap-1.5 items-start">
                <table>
                  <tr>
                    <th className="p-1 text-left">Name:</th>
                    <td className="p-1 text-left">{form.storedForm.name}</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-left">Age:</th>
                    <td className="p-1 text-left">{form.storedForm.age}</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-left">Password:</th>
                    <td className="p-1 text-left">{form.storedForm.newPassword}</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-left">Email:</th>
                    <td className="p-1 text-left">{form.storedForm.email}</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-left">Gender:</th>
                    <td className="p-1 text-left">{form.storedForm.gender}</td>
                  </tr>
                  <tr>
                    <th className="p-1 text-left">Country:</th>
                    <td className="p-1 text-left">{form.storedForm.country}</td>
                  </tr>
                </table>
              </div>
              <img className="w-32 h-auto object-contain" src={form.storedForm.upload} alt="avatar" />
            </div>
          );
        })}
    </div>
  );
};
