const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="">
        <label className="form-control w-full max-w-xs" htmlFor="originalWord">
          <div className="label">
            <span className="label-text">Original</span>
          </div>
          <input type="text" id="originalWord" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
      </div>
      <div className="">
        <label className="form-control w-full max-w-xs" htmlFor="translation">
          <div className="label">
            <span className="label-text">Translation</span>
          </div>
          <input type="text" id="translation" placeholder="Hola!" className="input input-bordered w-full max-w-xs" />
        </label>
      </div>
      <div className="flex gap-4">
        <button className="btn btn-active btn-neutral" type="reset">Cancel</button>
        <button className="btn btn-active">Add Note</button>
      </div>
    </form>
  );
};

export default Form;