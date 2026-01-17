import styles from './restaurant.module.css';

// Mock Menu Data
const menuCategories = [
  {
    title: 'Breakfast',
    items: [
      { name: 'Full English Breakfast', price: 800, desc: 'Eggs, sausages, beans, toast, coffee' },
      { name: 'Pancakes & Syrup', price: 600, desc: 'Fluffy pancakes with honey or maple syrup' },
    ]
  },
  {
    title: 'Main Courses',
    items: [
      { name: 'Grilled Tilapia', price: 1200, desc: 'Served with ugali and greens' },
      { name: 'Chicken Kienyeji', price: 1500, desc: 'Traditional free-range chicken stew' },
      { name: 'Pepper Steak', price: 1800, desc: 'Tender steak with peppercorn sauce and fries' },
    ]
  },
  {
    title: 'Beverages',
    items: [
      { name: 'Fresh Juice', price: 300, desc: 'Passion, Mango, or Orange' },
      { name: 'House Coffee', price: 250, desc: 'Freshly brewed local coffee' },
    ]
  }
];

export default function RestaurantPage() {
  return (
    <div className="container py-5">
      <header className={styles.header}>
        <h1 className={styles.title}>Kape Dining</h1>
        <p className={styles.subtitle}>Savor the taste of local and international delicacies.</p>
        <button className="btn btn-kape mt-4">Order Online</button>
      </header>

      <div className={styles.menuContainer}>
        {menuCategories.map((cat, index) => (
          <div key={index} className={styles.category}>
            <h2 className={styles.categoryTitle}>{cat.title}</h2>
            <div className={styles.items}>
              {cat.items.map((item, i) => (
                <div key={i} className={styles.menuItem}>
                  <div className={styles.itemInfo}>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className={styles.itemPrice}>KES {item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
