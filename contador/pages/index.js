import Head from "next/head";
import { useState } from "react";

export default function Home() {

  //Criar variável state para o contador
  const [contador, setContador] = useState(0);

  console.log("Passou aqui", contador);

  // Criar função para incrementar o contador
  function incrementar() {
    setContador(contador + 1);
    console.log("Contador incrementado", contador)
  }

  // Criar a fumção para decrementar o contador
  function decrementar() {
    setContador (contador -1);
    console.log("Contador decrementado:", contador);
  }

  return (
    <>
      <Head>
        <title>Contador</title>
      </Head>
      <body>
        <h1>Contador</h1>
        <h3>{contador}</h3>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </body>
    </>
  );
}
