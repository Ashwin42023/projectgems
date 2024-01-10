import React from "react";
import LayoutPage from "@/component/layout";
import UsersPage from "@/component/usersPage";

function Users() {
  return <UsersPage />;
}

Users.getLayout = function getLayout(page) {
  return <LayoutPage>{page}</LayoutPage>;
};

// export default withSafeRoute(Users);
export default Users;