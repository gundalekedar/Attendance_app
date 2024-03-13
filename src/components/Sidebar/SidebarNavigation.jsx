import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import LogoutIcon from '@mui/icons-material/Logout';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export const navigationMenu = [
    {
        title: "Dashboard",
        icon: <HomeIcon />,
        path:'/'
    },
    {
        title: "Classes",
        icon:<SchoolIcon/>,
        path:"/classes"
    },
    {
        title:"Teachers" ,
        icon:<PermContactCalendarIcon/>,
        path:"/teachers"
        
    },
    {
        title: "Students",
        icon:<PersonIcon/>,
        path:"/students"
    },
    {
        title: "Attendance",
        icon:<AlignVerticalBottomIcon/> ,
        path:"/attendances"
    },
    {
        title: "Sign Out",
        icon:<LogoutIcon/>,
        path:"/signout"
    }

]