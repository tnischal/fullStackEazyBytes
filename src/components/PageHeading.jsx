import React from 'react';
import PageTitle from './PageTitle';


export default function PageHeading(props) {
  return (
    <div>
        <PageTitle title="Radha Krishna Dairy - Bharatpur"/>
        <p className='page-heading-paragraph'>{props.children}</p>
    </div>
  );
};

