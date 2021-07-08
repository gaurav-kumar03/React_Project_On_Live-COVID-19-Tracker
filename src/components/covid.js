import React, { useEffect , useState } from 'react'
//import './covid.css';

const Covid = () => {

    const [data , setData] = useState([]);

    const getCovidData = async () => {
         
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch(err){
             console.log(err);
        }
    }
    

    useEffect(() => {
       getCovidData();
    }, []);

    return (
        <>
        <section>
            <h1 className="container text-center text-danger text-capitalize pt-5 font-weight-bold"> Live </h1>
             <h2 className="container text-center text-capitalize "> COVID-19 CORONAVIRUS TRACKER </h2>

                 <ul>
                   <div className="row">
                      <li className="pt-5">
                   
                          <div className="card">
                              <div className="col-lg-4 col-md-4 col-12">
                                  <p className="card__name"><span> OUR </span>COUNTRY</p>
                                  <p className="card__total card__small" >INDIA</p>
                              </div>
                          </div>
                      </li>

                      <li className="pt-5">
                          <div className="card">
                              <div className="col-lg-4 col-md-4 col-12">
                                  <p className="card__name"><span> TOTAL </span>RECOVERED</p>
                                  <p className="card__total card__small" >{data.recovered}</p>
                              </div>
                          </div>
                      </li>

                      <li className="pt-5">
                          <div className="card">
                              <div className="col-lg-4 col-md-4 col-12">
                                  <p className="card__name"><span> TOTAL </span>CONFIRMED</p>
                                  <p className="card__total card__small" >{data.confirmed}</p>
                              </div>
                          </div>
                      </li>
                    </div>

                    <div className="row">

                      <li className="pt-5">
                          <div className="card">
                              <div className="col-lg-4 col-md-4 col-12">
                                  <p className="card__name"><span> TOTAL </span>DEATHS</p>
                                  <p className="card__total card__small" >{data.deaths}</p>
                              </div>
                          </div>
                      </li>

                      <li className="pt-5">
                          <div className="card">
                              <div className="col-lg-4 col-md-4 col-12">
                                  <p className="card__name"><span> TOTAL </span>ACTIVE</p>
                                  <p className="card__total card__small" >{data.active}</p>
                              </div>
                          </div>
                      </li>

                      <li className="pt-5">
                          <div className="card">
                              <div className="col-lg-4 col-md-4 col-12">
                                  <p className="card__name"><span> LAST </span>UPDATED</p>
                                  <p className="card__total card__small" >{data.lastupdatedtime}</p>
                              </div>
                          </div>
                      </li>
                  
                 
                </div>

                 </ul>
        </section>
        </>
     )
}

export default Covid