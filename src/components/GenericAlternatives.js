import React from "react";

const GenericAlternatives = () => {
  const alternatives = [
    {
      img: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_5.png?width=320",
      name: "Dolo 650 mg",
      price: "₹34",
      rating: "⭐⭐⭐⭐ 4/5",
      id: 1,
    },
    {
      img: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_5.png?width=320",
      name: "Dolo 650 mg",
      price: "₹34",
      rating: "⭐⭐⭐⭐ 4/5",
      id: 2,
    },
    {
      img: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_5.png?width=320",
      name: "Dolo 650 mg",
      price: "₹34",
      rating: "⭐⭐⭐⭐ 4/5",
      id: 3,
    },
    {
      img: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_5.png?width=320",
      name: "Dolo 650 mg",
      price: "₹34",
      rating: "⭐⭐⭐⭐ 4/5",
      id: 4,
    },
  ];

  return (
    <section className="generic-alternatives">
      <h2>Compare medicince</h2>
      <p>Compare medicines price composition to make your decision</p>
      <div className="alternatives">
        {alternatives.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.name} className="medicine-image" />
            <h4>{item.name}</h4>
            <p>Price: {item.price}</p>
            <p>Rating & Review: {item.rating}</p>
            <button>Add</button>
            <ul>
              <li>
                the medicine is good it is bit costly when compared with the
                exact generic medicine
              </li>
              <li>
                the medicine is good it is bit costly when compared with the
                exact generic medicine
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenericAlternatives;
