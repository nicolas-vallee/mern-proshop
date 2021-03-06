import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({
  title = 'ProShop',
  description = 'Find the best quality electronics here',
  keywords = 'electronics',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

export default Meta;
