import React from 'react';

interface PropsHead {
  titulo: string;
  descricao: string;
}

const Head = ({ titulo, descricao }: PropsHead) => {
  React.useEffect(() => {
    document.title = titulo;
    document.documentElement
      .querySelector('meta[name="description"]')
      ?.setAttribute('description', descricao);
  }, [titulo, descricao]);
  return <></>;
};

export default Head;
