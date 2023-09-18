import React from "react"

export default function Home({ serverData }) {
  return <div>Hello world! {serverData.params.item}</div>
}

export const getServerData = context => {
  const { params, pageContext } = context

  return {
    props: {
      params,
      pageContext,
    },
  }
}