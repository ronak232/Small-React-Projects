import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function GrocceryItemList({ items }) {
  return (
    <div className="groccery-list">
      {items.map((item) => {
        return (
          <article className="groccery-items " key={item.id}>
            <p>{item.title}</p>
            <div className="btn-container">
              <button>
                <FaEdit />
              </button>
              <button>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default GrocceryItemList;
