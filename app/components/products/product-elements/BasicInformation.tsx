"use client";

type Props = {
  product: {
    name: string;
  };
};

export default function BasicInformation(props: Props) {
  return (
    <div className="p-4 bg-white rounded-md">
      <label htmlFor="product-name">Nimi</label>
      <input
        className="input-style"
        type="text"
        name="product-name"
        defaultValue={props.product.name}
      />
    </div>
  );
}
