import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/NotFound.scss';

const NotFound = () => (
  <main>
    <section>
      <div>
        <div>
          <span>404&nbsp;error</span>
          <span>Página&nbsp;no&nbsp;encontrada</span>
        </div>
        <svg viewBox='0 0 200 600'>
          <polygon points='118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 200 591.044514 200 8' />
        </svg>
      </div>
      <svg className='crack' viewBox='0 0 200 600'>
        <polyline points='118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514' />
      </svg>
      <div>
        <svg viewBox='0 0 200 600'>
          <polygon points='118.302698 8 59.5369448 66.7657528 186.487016 193.715824 14 366.202839 153.491505 505.694344 68.1413353 591.044514 0 591.044514 0 8' />
        </svg>
        <div>
          <span>Ups!&nbsp;No pudimos&nbsp;encontrar la casa que buscabas</span>
          <span>
            <Link to='/'>
              <b>Regresa&nbsp;a nuestro Holmes</b>
            </Link>
          </span>
        </div>
      </div>
    </section>
  </main>

);

export default NotFound;