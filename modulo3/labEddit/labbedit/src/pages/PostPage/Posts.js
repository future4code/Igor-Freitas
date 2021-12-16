import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

export default function Posts() {
  useUnprotectedPage()
  return (
    <div >
      Criar post
    </div>
  );
}


