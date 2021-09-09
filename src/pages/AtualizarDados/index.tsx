import React,{ useState, useEffect } from 'react';

import { Wrapper, Heading } from './styles';

const ChaMyData: React.FC = () => {

  const [ isLoading, setLoading ] = useState( true );

  useEffect(() => 
  {
    setTimeout(() => 
    {
      setLoading( false );
    }, 500);

  }, []);  
  

  return (
    <Wrapper>
     
      { isLoading ? 
      (
        <Heading> Carregando... </Heading>
      ) : 

      (
        <Heading> Em construçao... </Heading>
      )}

    </Wrapper>
  );
};

export default ChaMyData;
