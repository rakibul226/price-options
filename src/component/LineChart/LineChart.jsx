import { LineChart as LC, Line , XAxis, YAxis  } from 'recharts'; 

const LineChart = () => {

    const studentData = [
        { id: 1, name: "John", math: 85, chemistry: 77, physics: 92 },
        { id: 2, name: "Sarah", math: 78, chemistry: 75, physics: 88 },
        { id: 3, name: "Michael", math: 92, chemistry: 85, physics: 95 },
        { id: 4, name: "Emily", math: 68, chemistry: 72, physics: 75 },
        { id: 5, name: "David", math: 90, chemistry: 82, physics: 91 },
        { id: 6, name: "Laura", math: 75, chemistry: 70, physics: 80 },
        { id: 7, name: "Kevin", math: 83, chemistry: 79, physics: 89 },
        { id: 8, name: "Emma", math: 71, chemistry: 67, physics: 78 },
        { id: 9, name: "Ryan", math: 89, chemistry: 84, physics: 94 },
        { id: 10, name: "Olivia", math: 79, chemistry: 76, physics: 86 },
      ];
    return (
        <div>
            <LC width={900} height={400} data={studentData}> 
              
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey='physics' stroke={'green'}></Line>
                <Line dataKey='chemistry' stroke="yellow"></Line>
                <Line dataKey='math' stroke="red"></Line>
          
            </LC>
        </div>
    );
};

export default LineChart;