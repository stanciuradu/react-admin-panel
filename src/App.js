import React from "react";
import UserList from "./components/UserList";
import UserAddForm from "./components/UserAddForm";
import PostList from "./components/PostList";
import Header from "./components/Header";
import "./components/Header.css";
import "./components/UserList.css";
import "./components/PostList.css";
import "./components/UserItem.css";
import "./App.css";
// import componenentele UserList și UserAddForm, plus celelalte componente si fisiere CSS
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      users: [],
      // pana vin datele de las server ele vor fi tinute intr-un array gol
      posts: [],
      isUserDisplay: true,
    };
  }
  // in cadrul acestei metode s-a realizat request-ul asincron catre server pentru preluarea de useri, deoarece se apeleaza o singura data cand componeta s-a terminat de montat
  // dupa constructor() si render() se apeleaza aceasta metoda
  componentDidMount() {
    // request pentu preluarea de useri
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        data = data.filter((user) => user.id < 4);
        data.forEach((user) => {
          user.isGoldClient = false;
        });
        this.setState({ users: data });
      });
    // request pentru preluarea de postari
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postList) => {
        console.log(postList);
        // fac o filtrare pentru postari
        const newPostList = postList.filter((post) => post.id <= 3);
        // resetez state-ul postarilor
        this.setState({ posts: newPostList });
      });
  }

  // metoda pentru adaugarea unui input de tip color pentru schimbarea culorii textului
  handleColorChange(event) {
    // salvez valorea selectata de tuilizator intr-o variabila
    const newColor = event.target.value;
    // resetez state-ul aplicatiei cu noua culoare selectata
    this.setState({ color: newColor });
  }

  // metoda pentu eveimentele de onClick
  handleClickUsers() {
    this.setState({ isUserDisplay: true });
  }
  handleClickPosts() {
    this.setState({ isUserDisplay: false });
  }

  // functie care genereaza id-ul maxim al userului
  getMaxId(users) {
    let maxId = 0;

    users.forEach((user) => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }
  // metoda pentru actualizarea partiala a state-ului care primeste ca parametru o functie prevState
  // se actualizeaza partial state-ul users care are legatura cu formuarul de adaugare a utilizatorilor
  submitAddForm(event, name, email, wage, src, isGoldClient) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            wage,
            src,
            isGoldClient,
          },
        ],
      };
    });
  }

  render() {
    return (
      // in cadrul div-ului initializez valorea culorii initiale din state cu atribultul style
      <div className="app" style={{ color: this.state.color }}>
        <Header />
        <UserAddForm
          submitAddForm={(event, name, email, wage, src, isGoldClient) =>
            this.submitAddForm(event, name, email, wage, src, isGoldClient)
          }
        />
        {/*in render fac un operator terna pentru afisarea userilor sau postarilor */}
        {this.state.isUserDisplay ? (
          <UserList users={this.state.users} />
        ) : (
          <PostList posts={this.state.posts} />
        )}

        {/* trimite datele ca props catre componenta PostList */}

        <div className="container">
          {/* pasez metoda prin => astfel incat sa nu se piarda this din clasa curenta la contextul de executie al browserului */}
          <input
            id="color"
            type="color"
            onChange={(event) => this.handleColorChange(event)}
          />
          {/* butoane pentru evenimentul de onClick */}
          <button
            className="button"
            type="button"
            onClick={() => this.handleClickUsers()}
          >
            Afiseaza useri
          </button>
          <button
            className="button"
            type="button"
            onClick={() => this.handleClickPosts()}
          >
            Afiseaza postari
          </button>
        </div>
      </div>
    );
  }
}

export default App;
