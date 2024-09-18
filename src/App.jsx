import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import List from "./page/List";
import Map from "./page/Map";
import Button from "./components/button";
import { getFlights } from "./redux/actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  // detayı gösterilecek uçuşun idsi
  const [detailId, setDetailId] = useState(null);
  // tr sınırları içerisindeki uçuşları al ve store aktar
  useEffect(() => {
    dispatch(getFlights());
  }, []);
  //
  //
  return (
    <BrowserRouter>
      <Header />
      <Button />
      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List />} />
      </Routes>
      {/* detay id statetinde elaman varsa ekrana modal aç */}
      {detailId && <h1>MODAL</h1>}
    </BrowserRouter>
  );
};

export default App;
