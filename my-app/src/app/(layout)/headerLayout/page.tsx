import SearchBar from '@/components/searchBar/SearchBar'
import Link from 'next/link'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import headerlayout from "@/app/ui/headerlayout.module.css";




export default function HeaderLayout() {
  return (
    <div className={headerlayout.navbar}>
       <nav>
        <ul className={headerlayout.ulnav}>
            <Link href="/">Home</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/add-test">Add Test</Link>
            <Link href="/test">Test</Link>
            <Link href="/usertests">Start Test</Link>        </ul>
       </nav>
     <div className={headerlayout.rightnav}>
     <SearchBar customPlaceHolder='Type to search...' customClassForSearchBar={headerlayout.searchbar}/>
       <NotificationsIcon  height={"42px"}/>
     </div>

       
      
    </div>
  )
}
