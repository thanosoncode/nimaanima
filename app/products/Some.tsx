import { store } from "../store";

const Some = () => {
  const some = store.getState().products.products;

  return (
    <>
      <p>i am some</p> <div>{some.map((s) => s.name)}</div>
    </>
  );
};
export default Some;
