"use client";

type Props = {
  product: {
    name: string;
  };
};

export default function BasicInformation(props: Props) {
  console.log("BasicInformation component rendered with props:", props);
  return (
    <div className="p-6 bg-white rounded-2xl">
      <h2 className="text-2xl mb-4">Perustiedot</h2>
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
