import styles from './super.module.css';

export default function SuperAdminPage() {
  const stats = [
    { label: 'Total Revenue', value: 'KES 1.2M', change: '+12%' },
    { label: 'Occupancy Rate', value: '78%', change: '+5%' },
    { label: 'Active Bookings', value: '24', change: '-2%' },
    { label: 'Pending Requests', value: '5', change: '0%' },
  ];

  return (
    <div>
      <h1 className={styles.title}>Super Admin Dashboard</h1>
      
      <div className={styles.grid}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.card}>
            <h3>{stat.label}</h3>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.change} style={{ color: stat.change.startsWith('+') ? 'green' : 'red' }}>
              {stat.change} vs last month
            </div>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2>Recent Activity</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Booked Room 101</td>
              <td>2 mins ago</td>
            </tr>
            <tr>
              <td>System</td>
              <td>Backup Completed</td>
              <td>1 hour ago</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>Checked out</td>
              <td>3 hours ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
