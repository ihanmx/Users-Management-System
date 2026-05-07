import { User, NotebookPen, Trash2, Users } from "@/assets/icons/icons";
export const UsersActions = [
  {
    title: "Create User",
    details: "Create a new user",
    buttonText: "Create user",
    variant: "primary",
    href: "/users",
    icon: User,
  },
  {
    title: "View User",
    details: "Get a single user",
    buttonText: "Read user",
    variant: "primary",
    href: "/user",
    icon: Users,
  },
  {
    title: "Edit User",
    details: "Edit a user's information",
    buttonText: "Edit user",
    variant: "primary",
    href: "/users",
    icon: NotebookPen,
  },
  {
    title: "Delete User",
    details: "Delete a user",
    buttonText: "Delete user",
    variant: "primary",
    href: "/users",
    icon: Trash2,
  },
];
