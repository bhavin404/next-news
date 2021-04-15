import React from 'react'
import Nav from '../../components/nav'
import { useRouter } from 'next/router'

const feed = ({ pageNumber, articles }) => {
    console.log(pageNumber);

    const router = useRouter()
    return (
        <>
            <Nav />
            <div className="container1">

                <div className="center">
                    <h1>WELCOME TO GLOBAL NEWS</h1>
                    {articles.map((article, index) => (
                        <div className="box" key={index} onClick={() => (window.location.href = article.url)}  >
                            <div className="title">
                                <h2 >{article.title}</h2>
                            </div>
                            <div className="img">
                                <img src="" alt="" srcset={article.urlToImage} />
                            </div>
                            <div className="desc">
                                <p>{article.description} </p>
                            </div>
                        </div>

                    ))}

                    <div className="paginator" >
                        <div className="previous">
                            <button className={pageNumber === 1 ? "disabled" : "active"}
                                onClick={() => {
                                    if (pageNumber < 6) {
                                        router.push(`/feed/${pageNumber - 1}`)
                                    }
                                }} >Previous</button>

                        </div>
                        {pageNumber}
                        <div className="next">
                            <button className={pageNumber === 5 ? "disabled" : "active"}
                                onClick={() => {
                                    if (pageNumber < 6) {
                                        router.push(`/feed/${pageNumber + 1}`)
                                    }
                                }} >next</button>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export const getServerSideProps = async pageContext => {

    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 10) {
        return {
            props: {
                article: [],
                pageNumber: 1
            }
        }
    }

    const apiReference = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY}`
            }
        })

    const data = await apiReference.json()

    console.log(data);

    const { articles } = data
    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }


}

export default feed
