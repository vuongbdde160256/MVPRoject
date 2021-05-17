export const TrendingCard = ({data}) => {
  return (
    <section className="trendingCard__lt_">
      <div className="ctc-left">
        <h3>{data.title}</h3>
        <p>
          {data.content}
        </p>
        <a>View item</a>
      </div>
      <div className="ctc-center">
        <img src="./img/trend/trend1512px.png" height="400px"></img>
      </div>
      <div className="ctc-right">
        <h3 content-vl="Price">{data.price}</h3>
      </div>
    </section>
  );
};
