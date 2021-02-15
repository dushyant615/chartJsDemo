import {BarChart} from './ChartComponents/index';

function App() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'auto auto'}}>
      <div style={{gridColumn:'1'}}>
        <BarChart/>
      </div>
      <div style={{gridColumn:'2'}}>
        <BarChart/>
      </div>
    </div>
  );
}

export default App;
