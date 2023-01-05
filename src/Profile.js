import "./profile.css";

function Profile() {
  return (
    <div>
      <header>List</header>
      <div className="container">
        <div className="cards">
          <div className="cards__image"></div>
          <div className="description">
            <h3 className="cards__header">Name: Chimi W Wangdi</h3>
            <p className="cards__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
