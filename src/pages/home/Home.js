import React from "react";
import { useUser } from "../../contexts/context";
import Navigation from "../../components/Navigation";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useUser();
  return (
    <>
      <Navigation />
      <main>
      <Link to={"/add-user"}>Add users</Link>
        <ul>
          {data.map((item) => {
            const { name, email, body, id } = item;
            return (
              <li key={id}>
                <Link to={`/edit-user/${id}`}>
                  <h2>{name}</h2>
                </Link>
                <span>{email}</span>
                <p>{body}</p>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;
