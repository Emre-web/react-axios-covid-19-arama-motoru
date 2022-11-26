import './App.css';
import React,{useEffect,useState} from "react";
import axios, {Axios} from "axios";


function App() {

  const [veri,setVeri] = useState("");
  const [tarih,setTarih] = useState("");

  useEffect(() =>{

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
        .then(res=>setVeri(res.data[tarih]))
        .catch(err=>console.log(err))

  },[veri,tarih])

  return (
<>
      <div className="Container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-3">TÜRKİYE COVID-19 ARAMA MOTORU</h2>
              <input type="text" placeholder="GG/AA/YY" className="form-control"
              onChange={(e)=>setTarih(e.target.value)}/>
            <table className="table  text-white">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Test Sayısı</th>
                <th scope="col">Hasta Sayısı</th>
                <th scope="col">Vefat Sayısı</th>
              </tr>
              </thead>
              <tbody>
              <tr className="text-white" className={veri===undefined ? "bg-danger" : "bg-success"}>
                <th scope="row">{veri===undefined ? "Veri bekleniyor" : veri.date}</th>
                <td className="text-white">{veri===undefined ? "Veri bekleniyor" : veri.totalTests}</td>
                <td className="text-white">{veri===undefined ? "Veri bekleniyor" : veri.patients}</td>
                <td className="text-white">{veri===undefined ? "Veri bekleniyor" : veri.deaths}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</>
  );
}

export default App;
