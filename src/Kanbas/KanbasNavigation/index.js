import { Link, useLocation } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faTachometerAlt, faBook, faCalendar, faInbox, faHistory, 
  faChalkboard, faArrowRight, faQuestionCircle // Adjusted the icons based on what you provided 
} from '@fortawesome/free-solid-svg-icons';

function KanbasNavigation() {
    const links = [
        { id: "account", name: "Account", icon: faUser, path: "Account" },
        { name: "Dashboard", icon: faTachometerAlt, path: "Dashboard" },
        { name: "Courses", icon: faBook, path: "Courses" },
        { name: "Calendar", icon: faCalendar, path: "Calendar" },
        { name: "Inbox", icon: faInbox, path: "Inbox" },
        { name: "History", icon: faHistory, path: "History" },
        { name: "Studio", icon: faChalkboard, path: "Studio" },
        { name: "Commons", icon: faArrowRight, path: "Commons" }, // adjusted the icon
        { name: "Help", icon: faQuestionCircle, path: "Help" }
    ];

    const { pathname } = useLocation();

    return (
        <div className="wd-kanbas-navigation">
          <ul> 
            {links.map((link) => (
              <li 
                key={link.name} 
                className={pathname.includes(link.path) ? "wd-active" : ""}
              >
                <Link
                  to={`/Kanbas/${link.path}`}
                  className={link.class ? link.class : ""}  // Added dynamic class here
                >
                  <FontAwesomeIcon 
                    icon={link.icon} 
                    className={
                        link.id === 'account' 
                        ? "wd-icon account-icon"
                        : "wd-icon"
                    }
                    />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
  }

export default KanbasNavigation;
