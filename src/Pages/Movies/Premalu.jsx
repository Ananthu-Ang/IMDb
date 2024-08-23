import React from "react";
import "../Movies/Premalu.css";

function Premalu() {
  return (
    <div className="wholediv">
      <iframe
        width="800"
        height="400"
        src="https://www.youtube.com/embed/rR_2ti4l3nM?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="contentsdiv">
        <h3>Premalu 2024 (2h 36m) </h3>
        <p className="contentP">Comedy/Romance</p>
        <p className="contentP">Language:Malayalam</p>

        <p className="contentP">
          Premalu is a 2024 Indian Malayalam-language romantic comedy film
          directed by Girish A. D. and produced by Bhavana Studios, in the
          company of Fahadh Faasil and Friends and Working Class Hero. The film
          stars Naslen K. Gafoor and Mamitha Baiju, alongside Sangeeth Prathap,
          Shyam Mohan, Meenakshi Raveendran, Akhila Bhargavan, Mathew Thomas and
          Althaf Salim. In the film, Sachin Santhosh, a graduate from Kerala,
          plans on moving to the United Kingdom, but instead goes to Hyderabad
          and take a GATE course, where he meets and falls in love with Reenu
          Roy, an employee of an IT company.
        </p> <br />
        <p className="contentP">
        
          The film was officially announced in July 2023 under the tentative
          title Production No. 5, as it is the fifth production for Bhavana
          Studios, and the official title was announced in December 2023.
          Principal photography commenced the same month in Thiruvananthapuram.
          It was shot in Kochi, Hyderabad, Polachira and wrapped by
          mid-September 2023. The film has music composed by Vishnu Vijay,
          cinematography handled by Ajmal Sabu and editing by Akash Joseph
          Varghese.
        </p>
      </div>
    </div>
  );
}

export default Premalu;
