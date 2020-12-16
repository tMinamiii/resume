import React, { ReactElement } from 'react';
import ArticleList from './ArticleList';
import Border from './Border';

type Props = {
  feed: string;
};

const media = 'ScrapBox';
function trimTitle(title: string): string {
  return title.replace(' - tMinamiii - Scrapbox', '');
}

const ScrapBoxArticles: React.FC<Props> = ({ feed }: Props): ReactElement => {
  const feedobj = JSON.parse(feed);
  const articles: Array<ReactElement> = [];
  feedobj.items.map((f: any, i: number) => {
    if (f.title && f.link) {
      articles.push(<ArticleList key={`${media}_${i}`} title={trimTitle(f.title)} url={f.link} />);
    }
  });

  return <Border media={media} articles={articles} />;
};
export default ScrapBoxArticles;
