import './App.css';

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ];

function App() {

const showCompany = (name, revenue) => {
  return (
    <div id={name}>
       {name} makes {revenue} every year 
    </div>
  );
}

const getClassName = (temperature) => { 

    const answer = (temperature >= 15 && temperature <= 30) ? "fair" : (temperature < 15) ? "freezing" : "hell-scape";    
    return answer;
}



  return (
    <div>
      <div className="ex-space">
        <h4 className='ex-title'>Exercise 1</h4>
        <div className="exercise" id="ex-1">
          {companies.map(company =>(
            <div key = {company.name}>
            {showCompany(company.name, company.revenue)}
            </div>
          ))} 
        </div>
      </div>

      <div className="ex-space">
        <h4 className='ex-title'>Exercise 2</h4>
        <div className="exercise" id="ex-2">
          <div id="weatherBox" className={getClassName(40)}>
          </div>
        </div>
      </div>

    </div>
  )
}
export default App;
