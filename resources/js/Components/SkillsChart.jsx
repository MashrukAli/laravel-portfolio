import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const SkillsChart = () => {
  // Skill duration data for pie chart
  const skillData = [
    { name: 'JavaScript', years: 4 },
    { name: 'PHP', years: 3 },
    { name: 'HTML/CSS', years: 5 },
    { name: 'Python', years: 2 },
    { name: 'SQL', years: 3 }
  ];

  // Proficiency data for bar chart
  const proficiencyData = [
    { language: 'JavaScript', level: 85 },
    { language: 'PHP', level: 75 },
    { language: 'HTML/CSS', level: 90 },
    { language: 'Python', level: 65 },
    { language: 'SQL', level: 70 }
  ];

  // Dark theme colors
  const COLORS = ['#3B82F6', '#10B981', '#6366F1', '#F59E0B', '#EF4444'];
  
  // Custom tooltip style
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
          <p className="text-gray-200">{payload[0].name}</p>
          <p className="text-blue-400">{payload[0].value} {payload[0].payload.years ? 'Years' : '% Proficiency'}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[500px] grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-900 rounded-xl">
      {/* Pie Chart - Skill Duration */}
      <div className="h-full">
        <h3 className="text-xl font-semibold mb-4 text-gray-200">Experience Duration</h3>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <defs>
              {skillData.map((entry, index) => (
                <radialGradient id={`colorGradient${index}`} key={index}>
                  <stop offset="0%" stopColor={COLORS[index % COLORS.length]} />
                  <stop offset="100%" stopColor={COLORS[index % COLORS.length]} stopOpacity={0.7} />
                </radialGradient>
              ))}
            </defs>
            <Pie
              data={skillData}
              dataKey="years"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelStyle={{ fill: '#fff', fontSize: 14 }}
            >
              {skillData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={`url(#colorGradient${index})`} 
                  stroke="#1F2937"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ color: '#fff' }}
              formatter={(value) => <span className="text-gray-300">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart - Proficiency Level */}
      <div className="h-full">
        <h3 className="text-xl font-semibold mb-4 text-gray-200">Skill Proficiency</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={proficiencyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="language" 
              stroke="#9CA3AF" 
              tick={{ fill: '#D1D5DB' }} 
            />
            <YAxis 
              stroke="#9CA3AF" 
              tick={{ fill: '#D1D5DB' }} 
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="level" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]}
              animationDuration={800}
            >
              {proficiencyData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  stroke="#1F2937"
                  strokeWidth={1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SkillsChart;
