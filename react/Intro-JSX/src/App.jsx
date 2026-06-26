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

  return (
    <div>
      <h1>Exercise 1</h1>
       {companies.map(company => showCompany(company.name, company.revenue))}
    </div>
  )
}

export default App;
