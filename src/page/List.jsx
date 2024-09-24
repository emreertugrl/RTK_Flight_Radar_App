import React from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "./../components/Error";

const List = ({ setDetailId }) => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  if (isLoading)
    return (
      <div className="list-loader">
        <Loader />
      </div>
    );
  if (error) return <Error msg={error} />;
  return (
    <div className="p-3 p-md-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {flights.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button
                  onClick={() => setDetailId(flight.id)}
                  className="button"
                >
                  Detay Gör
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
