import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Loading, Error, ProductImages, AddToCart, PageHero } from 'components';
import Wrapper from 'pages/SingleProductPage/SingleProductPageWrapper';
import { useProductsContext } from 'contexts/ProductsContext/products_context';

const SingleProductPage = () => {
  const {
    fetchSingleProduct,
    single_product_loading: loading,
    single_product_error: error,
    single_product,
  } = useProductsContext();

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
    return <Error />;
  }

  const { name, price = { raw: '' }, assets, inventory = { available: 0 } } = single_product;

  return (
    <>
      <PageHero title={name} product />
      <Wrapper className="section-center">
        <div className="center">
          <ProductImages assets={assets} />
          <div className="info">
            <h2>{name}</h2>

            <h4>${price.raw}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident qui placeat in
              nesciunt magni ipsum voluptas cumque, minus aut temporibus voluptate facilis ipsam
              commodi ut maiores numquam porro magnam suscipit iste. Distinctio, repellat sed nobis,
              illo ratione consequuntur, magni quas voluptatem assumenda doloremque aliquid
              accusamus! Inventore incidunt iste voluptatum, corporis minus consequatur.
            </p>
            <h5>{inventory.available ? 'in stock' : null}</h5>

            <hr />
            {inventory.available ? <AddToCart product={single_product} /> : null}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SingleProductPage;
