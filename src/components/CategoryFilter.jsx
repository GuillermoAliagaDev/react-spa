import { categories } from "../data/courses";

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="category-filter">
      <button
        className={`filter-btn ${!selected ? "active" : ""}`}
        onClick={() => onSelect(null)}
      >
        Todas
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`filter-btn ${selected === cat.name ? "active" : ""}`}
          onClick={() => onSelect(cat.name)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
