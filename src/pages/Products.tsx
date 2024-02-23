import {
  FunnelIcon,
  ListBulletIcon,
  TableCellsIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { products } from "../mock/products";

export function Products() {
  const navigate = useNavigate();
  const [isViewColumn, setIsViewColumn] = useState(true);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#ebf3fe",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <p style={{ fontSize: 20 }}>Produtos</p>
      </div>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 20,
        }}
      >
        <button
          style={{
            padding: 10,
            backgroundColor: "#ebf3fe",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          <FunnelIcon width={20} />
        </button>
        <button
          style={{
            padding: 10,
            backgroundColor: "#ebf3fe",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
          onClick={() => setIsViewColumn((prev) => !prev)}
        >
          {!isViewColumn ? (
            <TableCellsIcon width={20} />
          ) : (
            <ListBulletIcon width={20} />
          )}
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isViewColumn ? "repeat(2, 1fr)" : "1fr",
          gap: 10,
          marginTop: 20,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/details/${product.id}`)}
            style={{
              border: "1px solid #ebf1f6",
              borderRadius: 10,
              margin: "20px 0",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: isViewColumn ? 200 : 300,
                marginBottom: 10,
                backgroundColor: "#e6e6e6",
              }}
            />
            <div
              style={{
                padding: 10,
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {product.name}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: isViewColumn ? "column" : "row",
                  gap: isViewColumn ? 5 : 10,
                }}
              >
                <p>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <p
                  style={{
                    color: "gray",
                    textDecoration: "line-through",
                  }}
                >
                  {product.oldPrice &&
                    product.oldPrice.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
