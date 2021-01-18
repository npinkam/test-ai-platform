import Layout from '../../../components/Layout'
import Chart from 'react-google-charts'
import axios from 'axios'

function workloadChart(props) {
  const today = new Date()
  const todayStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  const timeStr = function (sec: number) {
    return new Date(
      todayStr + ' ' + new Date(sec * 1000).toISOString().substr(11, 8)
    ).toTimeString()
  }
  async function getData() {
    // create a new XMLHttpRequest
    const tableInfo = [
      { type: 'string', id: 'Station' },
      { type: 'string', id: 'dummy bar label' },
      { type: 'string', role: 'tooltip' },
      { type: 'number', id: 'Start' },
      { type: 'number', id: 'End' },
    ]
    const response = await axios.get('http://localhost:1880/workloadraw')
    const data = response.data
    /* for (let i = 0; i < data.length; i++) {
      data[i][3] = timeStr(data[i][3])
      data[i][4] = timeStr(data[i][4])
    } */
    data.unshift(tableInfo)
    data.splice(5)
    //console.log(data)
    return data
  }
  //getData()
  return (
    <Layout>
      <div>
        {/*         <h1>Workload Chart Page</h1>
        <p>Show Workload Gantt Chart from GD.findi execution.</p> */}
        <Chart
          width={'100%'}
          height={'85vh'}
          chartType="Timeline"
          loader={<div>Loading Workload Gantt Chart</div>}
          //data={getData()}
          /* data={[
            [
              { type: 'string', id: 'Station' },
              { type: 'string', id: 'dummy bar label' },
              { type: 'string', role: 'tooltip' },
              { type: 'number', id: 'Start' },
              { type: 'number', id: 'End' },
            ],
            [
              'Packing(F4)',
              '',
              'task: Working<br/>productName: Product3_TypeA_B<br/>processName: Product3_TypeA_B<br/>index: 3<br/>part: 1<br/>duration: 00:04:00',
              3390,
              3630,
            ],
            [
              'Packing(F4)',
              '',
              'task: Working<br/>productName: Product3_TypeA_B<br/>processName: Product3_TypeA_B<br/>index: 3<br/>part: 1<br/>duration: 00:04:00',
              4350,
              4590,
            ],
            [
              'Packing(F4)',
              '',
              'task: Working<br/>productName: Product3_TypeA_B<br/>processName: Product3_TypeA_B<br/>index: 3<br/>part: 1<br/>duration: 00:04:00',
              5310,
              5550,
            ],
            [
              'Packing(F4)',
              '',
              'task: Working<br/>productName: Product3_TypeA_B<br/>processName: Product3_TypeA_B<br/>index: 3<br/>part: 1<br/>duration: 00:04:00',
              6270,
              6510,
            ],
          ]} */
          options={{
            height: 400,
            timeline: { colorByRowLabel: true },
            labelStyle: {
              fontSize: 13,
            },
            AllowHtml: true,
            colors: [
              '#111e6c',
              '#1d2951',
              '#597387',
              '#003152',
              '#000080',
              '#0e4d92',
              '#1034a6',
              '#0080ff',
              '#0f52ba',
              '#008ecc',
              '#6593f5',
              '#4c516d',
              '#008081',
              '#73c2fb',
              '#7285a5',
              '#4f97a3',
              '#57a0d3',
              '#4682b4',
              '#81d8d0',
              '#89cff0',
              '#588bae',
              '#7ef9ff',
              '#95c8d8',
              '#b0dfe5',
              '#3fe0d0',
            ],
          }}
        ></Chart>
      </div>
    </Layout>
  )
}

export default workloadChart
