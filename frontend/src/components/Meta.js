import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = (props) => {
  const { title, description, keywords } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Proshop',
  keywords: 'electronics, buy electronics, cheap',
  description: 'We sell the best products for cheap',
};

export default Meta;
