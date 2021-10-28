import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaGlobe,
  FaLongArrowAltLeft,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaUserTag,
} from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import ReactLoading from "react-loading";
//import avatar from "../user.png";

const User = () => {
  const [done, setDone] = useState(undefined);
  const { id } = useParams();
  const history = useHistory();

  //const history = useHistory();
  const [item, setItem] = useState({});

  useEffect(() => {
    getUser(id);
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    history.goBack();
  };

  const getUser = async (id) => {
    try {
      const user = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      //console.log(user);
      setItem(user.data);
      setDone(true);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  return (
    <div className="container profile my-5 p-5">
      <h2 className="text-center text-uppercase mb-5 ">User details</h2>

      <div className="d-flex flex-column align-items-center mb-2">
        {!done ? (
          <ReactLoading
            type={"bubbles"}
            color={"#0d6efd"}
            height={100}
            width={150}
          />
        ) : (
          <>
            <p>
              <FaUser />
              <span>Name : </span> {item.name}
            </p>
            <p>
              <FaUserTag />
              <span>Username : </span> {item.username}
            </p>
            <p>
              <FaEnvelope />
              <span>Email : </span> {item.email}
            </p>

            <p>
              <FaMapMarkerAlt />
              <span>Address : </span> {item.address.street} /
              {item.address.suite} / {item.address.city} /{" "}
              {item.address.zipcode}
            </p>
            <p>
              <FaPhone />
              <span>Phone : </span> {item.phone}
            </p>
            <p>
              <FaGlobe />
              <span>Website : </span> {item.website}
            </p>
            <p>
              <FaBuilding />
              <span>Company : </span> {item.company.name} /
              {item.company.catchPhrase} / {item.company.bs}
            </p>
          </>
        )}
      </div>

      <div className="text-center">
        <button className="return-link text-center mt-5" onClick={handleClick}>
          <FaLongArrowAltLeft /> Return
        </button>
      </div>
    </div>
  );
};

export default User;
