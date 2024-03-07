import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import ListRendering from "./ListRendering";
import ListRendering2 from "./ListRendering2";
import Switch from "./Switch";
import ProfilePicture from "./ProfilePicture";

function App() {
  const fruits = [
    { id: 1, name: "Orange", calorie: 90 },
    { id: 2, name: "Mango", calorie: 45 },
    { id: 3, name: "Pineapple", calorie: 105 },
    { id: 4, name: "Coconut", calorie: 67 },
    { id: 5, name: "Banana", calorie: 517 },
  ];
  const vegetables = [
    { id: 6, name: "Potatoes", calorie: 110 },
    { id: 7, name: "Celery", calorie: 15 },
    { id: 8, name: "Carrots", calorie: 25 },
    { id: 9, name: "Corn", calorie: 63 },
    { id: 10, name: "Broccoli", calorie: 50 },
  ];
  return (
    <>
      {/* <Header />
      <Food/>
      <Footer /> */}
      {/* <Card title='Madara' text='The first man to awaken the mangekyou sharingan'></Card>
      <Card title='Obito' text='hacker of the Uchiha clan'></Card>  */}
      {/* <Button/> */}

      {/* <Student name="30" age="30" isStudent={true}></Student>
      <Student name='Madara Uchiha' age={45} isStudent={false}></Student>
      <Student name='Itachi Uchiha' age={25} isStudent={false}></Student>
      <Student name='Sasuke Uchiha' age={16} isStudent={true}></Student>
      <Student/> */}

      {/* <UserGreeting isLoggedIn = {true} username = "Hacker"/> */}

      {/* <ListRendering/> */}

      {/* {fruits.length > 0 ? (
        <ListRendering2 items={fruits} category="Fruits" />
      ) : null}
      {vegetables.length > 0 ? (
        <ListRendering2 items={vegetables} category="Vegetables" />
      ) : null} */}

      {/* <Switch/> */}

      <ProfilePicture/>
    </>
  );
}

export default App;
