import { useSelector } from "react-redux";

const Showdata = () => {
  const user = useSelector((state) => state.user);
  const { name, lastname, email, passcode } = user || {};
  localStorage.setItem("user", JSON.stringify(user));

  return <div></div>;
};

export default Showdata;
