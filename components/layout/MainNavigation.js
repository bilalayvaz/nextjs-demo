import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>bilalayvazoglu</div>
      <nav>
        <ul>
          <li>
            <Link href="/">My Projects</Link>
          </li>
          {/* <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
