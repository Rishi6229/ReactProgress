
import './App.css';

const contactName = {
  0:{
    "Name":"Rishi Jha",
    "Place":"Ranchi",
    "Favorite Food":"Pizza"
  },
  1:{
    "Name":"Mayank Jha",
    "Place":"Patna",
    "Favorite Food":"Burger"
  },
  2:{
    "Name":"Maonj Jha",
    "Place":"Karachi",
    "Favorite Food":"Biryani"
  }

}

function App() {
  return (
    <div className="Application">
      <section>
        <p>The name of the person is : {contactName[0].Name}</p>
        <p>The person hails from:{contactName[0].Place}</p>
      </section>

      <section>
        <p>The name of the person is :{contactName[1].Name}</p>
        <p>The person hails from:{contactName[1].Place}</p>
        <p>His favorite food is:{contactName[1]['Favorite Food']}</p>
      </section>

    </div>
  );
}

export default App;
