import React from "react"

export default function Post({ params }){
    const { id } = params
    return(
        <div>
            este es el post { id }
        </div>
    )
}