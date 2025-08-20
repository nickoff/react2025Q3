export const ReactHookForm = () => {
  const handleSabmitForm = () => {};
  return (
    <>
      <h2 className="text-2xl text-cyan-400 uppercase font-bold mb-5">React Hook Form</h2>
      <form className="text-xs uppercase flex flex-col items-start w-full gap-2" action={handleSabmitForm}>
        <div>
          <label htmlFor="name" autoFocus>
            Name
          </label>
          <span></span>
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" id="name" type="text" />
        <div>
          <label htmlFor="age">Age</label>
          <span></span>
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0  w-full" id="age" type="number" />
        <div>
          <label htmlFor="email">Email</label>
          <span></span>
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" id="email" type="email" />
        <div>
          <label htmlFor="newPassword">New password</label>
          <span></span>
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" id="newPassword" type="password" />
        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
          <span></span>
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" id="confirmPassword" type="password" />
        <div>
          <legend>Gender</legend>
          <span></span>
        </div>
        <div className="flex items-center justify-start gap-2">
          <label htmlFor="famale">famale</label>
          <input className="text-base p-2 bg-gray-500 outline-0" name="gender" id="famale" type="radio" />
          <label htmlFor="male">male</label>
          <input className="text-base p-2 bg-gray-500 outline-0" name="gender" id="male" type="radio" />
        </div>
        <div className="flex items-center justify-start gap-2">
          <input className="text-base p-2 bg-gray-500 outline-0" name="accept" id="accept" type="checkbox" />
          <label htmlFor="accept">Accept Terms and Conditions agreement</label>
          <span></span>
        </div>
        <div>
          <label htmlFor="upload">Upload picture</label>
          <span></span>
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" name="upload" id="upload" type="file" />
        <div>
          <label htmlFor="country">Select country</label>
          <span></span>
        </div>
        <input className="text-base p-2 bg-gray-500 outline-0 w-full" name="country" id="country" list="country-list" />
        <datalist id="country-list">
          <option value="belarus"></option>
          <option value="poland"></option>
        </datalist>
        <div className="flex items-center justify-center gap-5">
          <button className="p-3 min-w-50 uppercase font-bold border-2 bg-cyan-700 border-cyan-800 rounded-md cursor-pointer hover:bg-cyan-800">
            Sabmit
          </button>
          <button
            className="p-3 min-w-50 uppercase font-bold border-2 bg-red-700 border-red-800 rounded-md cursor-pointer hover:bg-red-800"
            type="button">
            Reset form
          </button>
        </div>
      </form>
    </>
  );
};
