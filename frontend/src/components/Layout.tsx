import {
  Link,
  Outlet,
} from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">一覧</Link></li>
          <li><Link to="/new">投函</Link></li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
