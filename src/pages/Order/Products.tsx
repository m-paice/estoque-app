import { Colors } from "../../components/Colors";
import { Sizes } from "../../components/Sizes";
import { Product } from "../../context/Cart";

interface Props {
  products: Product[];
}

export function Products({ products }: Props) {
  return (
    <div>
      <h4>Produtos</h4>

      <div>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              gap: 10,
              marginBottom: 10,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: 50,
                height: 50,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <p>
                  {product.OrderProducts.amount}x {product.name}
                </p>
                <p>
                  {product.OrderProducts.subtotal.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Colors
                  colors={product.color ? [product.color] : []}
                  handleSelectColor={() => {}}
                  selectedColor=""
                  hideSelectedColor
                />
                <Sizes
                  handleSelectedSize={() => {}}
                  selectedSize=""
                  hideSelectedSize
                  sizes={product.size ? [product.size] : []}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
