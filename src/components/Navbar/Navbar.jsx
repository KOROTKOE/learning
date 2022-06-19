import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom"

export default () => <nav className={s.nav}>
<div className={`${s.item} ${s.gold}`}>
  <NavLink to="/profile" className={navData=>navData.isActive?s.active:""}>Profile</NavLink>
</div>
<div className={s.item}>
  <NavLink to="/dialogs" className={navData=>navData.isActive?s.active:""}>Messages</NavLink>
</div>
<div className={s.item}>
  <a>News</a>
</div>
<div className={s.item}>
  <a>Music</a>
</div>
<div className={s.item}>
  <a>Settings</a>
</div>
</nav>