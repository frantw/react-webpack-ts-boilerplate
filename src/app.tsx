import React, { FC } from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.h1`
    color: blue;
`;

const Title: FC<{ text: string }> = ({ text }) => {
    return <TitleWrapper>{text}</TitleWrapper>;
};

const App: FC = () => {
    return <Title text={'Hello World!'}></Title>;
};

export default App;
