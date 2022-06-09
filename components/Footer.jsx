function Footer() {
  return (
    <div className="m-2 flex justify-around bg-white p-6 text-sm">
      <div>
        <h3 className="text-2xl my-2 font-bold">About us</h3>
        <p className="my-1.5">We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that they love.</p>
        <p className="my-1.5">All copyrights reserved © 2020 - Health Explore </p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl my-2 font-bold">Sitemap</h3>
        <a className="my-1.5">Nurses</a>
        <a className="my-1.5">Employers</a>
        <a className="my-1.5">Social networking</a>
        <a className="my-1.5">Jobs</a>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl my-2 font-bold">Privacy</h3>
        <a className="my-1.5">Terms of use</a>
        <a className="my-1.5">Provacy policy</a>
        <a className="my-1.5">Cookie policy</a>
        </div>
    </div>
  );
}

export default Footer;
