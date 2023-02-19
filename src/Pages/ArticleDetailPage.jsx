import { React, Component } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getArticle } from '../Utils/ArticleFetcher';
import { ArticleDetail } from './ArticleDetail';

export const ArticleDetailPageWrapper = () => {
    const { id } = useParams();

    return (
        <div>
            <Helmet>
                <title>Herbal.in - Artikel {id}</title>
            </Helmet>
            <ArticleDetailPage id={id} />
        </div>
    )
}

class ArticleDetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: null,
        }
    }

    async componentDidMount() {
        const article = await getArticle(this.props.id);

        this.setState(() => {
            return {
                articles: article.data
            }
        })
    }
    render() {
        if (this.state.articles) {
            return (
                <section>
                    <ArticleDetail {...this.state.articles} />
                </section>
            )
        }

        if (this.state.articles === null) {
            return (
                <div className="loading">
                    <span class="loader"></span>
                </div>
            )
        }
    }
}
