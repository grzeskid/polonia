export default function Card() {
  return (
    <>
      <div className="card w-96 bg-white shadow-xl m-5">
        <div className="card-body">
          <h2 className="card-title">Tytuł</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Czytaj więcej</button>
          </div>
        </div>
      </div>
    </>
  );
}
