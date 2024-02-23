import { useNavigate, useParams } from "react-router-dom";

import { Amounts } from "../components/Amounts";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Colors } from "../components/Colors";
import { Sizes } from "../components/Sizes";
import { useCartContext } from "../context/Cart";

import { products } from "../mock/products";
import { useState } from "react";

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addProduct } = useCartContext();

  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const product = products.find((product) => product.id === id);

  const handleAddProduct = () => {
    if (!product) return;

    addProduct(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        amount: 1,
        color,
        size,
      },
      amount
    );
    navigate("/cart");
  };

  const handleAddAmount = () => {
    setAmount(amount + 1);
  };
  const handleRemoveAmount = () => {
    if (amount === 1) return;
    setAmount(amount - 1);
  };

  const handleSelectColor = (color: string) => {
    setColor(color);
  };

  const handleSelectSize = (size: string) => {
    setSize(size);
  };

  if (!product)
    return (
      <div>
        <p>carregando</p>
      </div>
    );

  return (
    <div>
      <div
        style={{
          backgroundColor: "#ebf3fe",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <p style={{ fontSize: 20 }}>Detalhes do produto</p>
      </div>

      <div>
        <div
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
              height: 300,
              borderRadius: "10px 10px 0 0",
            }}
          ></div>
          <div
            style={{
              marginTop: 10,
              padding: "0px 20px",
              display: "flex",
              gap: 10,
            }}
          >
            <Badge>Promoção</Badge>
            <Badge>Tecnologia</Badge>
          </div>
          <div
            style={{
              padding: 20,
            }}
          >
            <p
              style={{
                fontSize: 24,
              }}
            >
              {product.name}
            </p>
            <p style={{ color: "gray" }}>{product.description}</p>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              {product.oldPrice && (
                <p
                  style={{
                    textDecoration: "line-through",
                    color: "#ccc",
                  }}
                >
                  {product.oldPrice.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              )}
              <p
                style={{
                  fontSize: 24,
                }}
              >
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                margin: "20px 0",
              }}
            >
              <Colors
                colors={product.colors ?? []}
                selectedColor={color}
                handleSelectColor={handleSelectColor}
                hideSelectedColor={product.colors?.length ? false : true}
              />
              <Sizes
                sizes={product.sizes ?? []}
                selectedSize={size}
                handleSelectedSize={handleSelectSize}
                hideSelectedSize={product.sizes?.length ? false : true}
              />

              <Amounts
                value={amount}
                addAmount={handleAddAmount}
                removeAmount={handleRemoveAmount}
              />
            </div>

            <div
              style={{
                marginTop: 50,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Button onClick={handleAddProduct}>Adicionar ao carrinho</Button>
            </div>

            <div
              style={{
                marginTop: 20,
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto sed molestiae at sint soluta animi, itaque in debitis
                quos fuga repudiandae voluptatum amet a et, ut voluptas
                doloremque enim esse?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
