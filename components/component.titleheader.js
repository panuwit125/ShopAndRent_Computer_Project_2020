import React from 'react'
import Head from "next/head";

function TitleHeader({name}) {
    return (
        <Head>
          <title>{name}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
    )
}

export default TitleHeader
