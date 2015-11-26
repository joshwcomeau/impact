App = React.createClass({
  getPosts() {
    return [
      {
        _id: 1,
        title: "A Brand New Day!",
        text: "Thanks so much for this warm welcome. I can't wait to introduce you to this blogging engine!",
        createdAt: moment().subtract(1, 'hour').toDate(),
      }, {
        _id: 2,
        title: "New Feature - Posts",
        text: "As of now, this blog features actual posts. Stay tuned!",
        createdAt: moment().subtract(30, 'minutes').toDate(),
      }, {
        _id: 3,
        title: "Holy cow, progress is fast!",
        text: "In other news, React is cool. Back to you in the studio, John.",
        createdAt: moment().subtract(3, 'minutes').toDate(),

      }
    ]
  },

  renderPosts() {
    return this.getPosts().map( post => <BlogPost key={post._id} post={post} /> );
  },

  render() {
    return (
      <div className="container">
        <header><h1>Impact</h1></header>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
});
