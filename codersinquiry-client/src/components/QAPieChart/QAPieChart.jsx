import React from 'react';
import './QAPieChart.css';
import { PieChart, Pie, Cell, Legend, Tooltip, } from 'recharts';

const data01 = [
    { name: 'Questions', value: 142 },
    { name: 'Answers', value: 300 },
    { name: 'Articles', value: 26 },
    { name: 'Users', value: 566 },
];


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const QAPieChart = () => {
    return (
        <div className='qaPieChart'>
            <PieChart width={245} height={245} align='center' className='qaPieChart__chart'>
                <Pie data={data01} cx='50%' cy='50%' outerRadius={75} fill='#8884d8' >
                    {data01.map((_, index) => (
                        <Cell fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Legend align='center' />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default QAPieChart;
