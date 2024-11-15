export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h6 className="text-title-footer">About</h6>
        <ul className="grid gap-1.5">
          <li className="text-items-footer">Locations</li>
          <li className="text-items-footer">Franchise With Us</li>
          <li className="text-items-footer">Partners</li>
          <li className="text-items-footer">About Us</li>
          <li className="text-items-footer">Make Fetch Happen!</li>
        </ul>
      </div>
      <div>
        <h6 className="text-title-footer">Resources</h6>
        <ul className="grid gap-1.5">
          <li className="text-items-footer">Reviews</li>
          <li className="text-items-footer">Pet Resource Center</li>
          <li className="text-items-footer">Media Fact Sheet</li>
          <li className="text-items-footer">Blog</li>
          <li className="text-items-footer">News</li>
        </ul>
      </div>
      <div>
        <ul className="grid gap-1.5">
          <li className="text-items-footer">Gift Cards</li>
          <li className="text-items-footer">Services</li>
          <li className="text-items-footer">Franchisee Login</li>
          <li className="text-items-footer">Terms of Use</li>
          <li className="text-items-footer">Privacy Policy</li>
        </ul>
      </div>
      <div className="grid gap-5">
        <h6 className="text-title-footer">NewsLetter</h6>
        <p className="text-items-footer w-60">
          Sign up to receive the Fetch! Family Newsletter
        </p>

        <div className="flex">
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Adress"
              autoComplete="on"
              className="rounded-full w-64 h-14 outline-none pl-7 shadow-md"
            />
          </div>
          <button className="w-12 h-12 opacity-100 ml-[-3.5rem] mt-[0.3rem] shadow-btn_zipcode bg-coral_red rounded-full">
            {"-->"}
          </button>
        </div>
      </div>
    </footer>
  );
};
