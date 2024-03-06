import { Link } from 'react-router-dom';
import Header from '../../components/header/header.tsx';
import React from 'react';

export default function NotFoundPage() : JSX.Element {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="page">
        <b>Page not found</b>
        <Link to="/">Main page.</Link>
      </div>
    </React.Fragment>
  );
}
