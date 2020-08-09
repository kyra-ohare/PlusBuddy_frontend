import React from 'react';
import Language from './src/lang/Language';
import PlusBuddy from './src/routes/Stack';
import Article from './src/screens/ArticleTest';

export default function App() {
  return (
    <Language>
      <PlusBuddy />
    </Language>
    // <Article />
  );
}