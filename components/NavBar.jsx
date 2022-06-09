function NavBar() {
  return (
    <div className="px-4 flex justify-between bg-white">
        <h3 className="m-4 text-base font-semibold text-sky-500 tracking-tighter">HEALTH EXPLORE</h3>
        <nav className="m-4 w-3/6 flex justify-between no-underline text-sm font-medium tracking-tighter">
            <a href="#profile">PROFILE</a>
            <a href="#jobs">JOBS</a>
            <a href="#professional-network">PROFESSIONAL NETWORK</a>
            <a href="#lounge">LOUNGE</a>
            <a href="#salary">SALARY</a>
        </nav>
        <div className="m-2 w-1/6 flex justify-around">
            <button className="border-solid border border-sky-500 rounded-lg text-sky-500 px-2.5 text-sm tracking-tight font-bold">CREATE JOB</button>
            <a className="mt-0.5 p-1.5 px-2 bg-sky-500 rounded-full text-white">JO</a> 
            <a className="m-2 text-sm font-medium tracking-tighter">LOGOUT</a>
        </div>
    </div>
  )
}

export default NavBar