import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

function ProductDetailPage({ loadedProduct }) {
  if (!loadedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pid;

  const filePath = path.join(process.cwd(), "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const ids = data.products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: params,
    fallback: true,
  };
}

export default ProductDetailPage;
