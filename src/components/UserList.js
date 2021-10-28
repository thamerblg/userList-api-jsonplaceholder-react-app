import axios from "axios";
import { useEffect, useState } from "react";
import UserItems from "./UserItems";
import ReactLoading from "react-loading";

const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 500);
  }, []);

  const getUsers = async () => {
    try {
      const listOfUSer = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(listOfUSer);
      setListOfUSer(listOfUSer.data);
      setDone(true);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-uppercase mb-5 ">List of users</h2>

      <div className="row">
        {!done ? (
          <div className="d-flex flex-wrap justify-content-between">
            <ReactLoading
              type={"bubbles"}
              color={"#0d6efd"}
              height={100}
              width={150}
            />
          </div>
        ) : (
          <>
            {listOfUSer &&
              listOfUSer.map((user) => <UserItems user={user} key={user.id} />)}
          </>
        )}
      </div>
    </div>
  );
};

export default UserList;
