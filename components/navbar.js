import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (

<div className="navbar bg-base-100 justify-between">
  <div className="navbar-start w-full">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href={"/news"}>Aktualności</Link></li>
        <li><Link href={"/about"}>O nas</Link></li>
        <li><Link href={"/trainings"}>Treningi</Link></li>
        <li><Link href={"/contact"}>Kontakt</Link></li>
        <li><Link href={"/sponsors"}>Sponsorzy</Link></li>
      </ul>
    </div>
    <Link href='/'>
       <Image 
       src={"/logoPolonia.jpg"}
       alt={"logo TW Polonia"}
       width={150}
       height={150}
       />
     </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
        <li><Link href={"/news"}>Aktualności</Link></li>
        <li><Link href={"/about"}>O nas</Link></li>
        <li><Link href={"/trainings"}>Treningi</Link></li>
        <li><Link href={"/contact"}>Kontakt</Link></li>
        <li><Link href={"/sponsors"}>Sponsorzy</Link></li>
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
</div>

    )
}