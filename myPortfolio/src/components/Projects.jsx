import React from 'react';
import Ui from "../assets/Ui.png";
import trezen from "../assets/trezen.png"
import weather from "../assets/weather.png"

function Projects() {
  return (
    <section id="projects" style={{ padding: "50px 0", textAlign: "center" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "30px" }}>
          <span>My Projects</span>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          borderRadius: "12px",
          padding: "30px",
          marginBottom: "40px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          // e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          // e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
        }}
        >
          <img src={trezen} alt="Trezen UI"
            style={{
              width: "40%",
              height: "auto",
              borderRadius: "10px",
              marginRight: "20px",
              objectFit: "cover"
            }} />
          <div style={{ textAlign: "left", flex: 1 }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Trezen: Simplified Travel Planning</h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
              A bilingual platform (Hindi & English) that streamlines booking flights, stays, and activities, while offering personalized trip recommendations for a hassle-free experience.
            </p>
            <div>
              <a href="https://github.com/shivamtechtecho/CW_Project_RCT-NEM" target="_blank" rel="noopener noreferrer"
                style={{
                  background: "#333",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  marginRight: "10px",
                  display: "inline-block"
                }}>GitHub</a>
              <a href="https://trezen-smart-scipters.netlify.app/" target="_blank" rel="noopener noreferrer"
                style={{
                  background: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  display: "inline-block"
                }}>Live Demo</a>
            </div>
          </div>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          borderRadius: "12px",
          padding: "30px",
          marginBottom: "40px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          // e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          // e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
        }}>
          <img src={Ui} alt="Unity Hub"
            style={{
              width: "40%",
              height: "auto",
              borderRadius: "10px",
              marginRight: "20px",
              objectFit: "cover"
            }} />
          <div style={{ textAlign: "left", flex: 1 }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Unity Hub: Collaborative Community Platform</h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
              The Unity-hub Platform is a dynamic web application designed to connect users based on their interests. It allows users to join niche communities, participate in real-time discussions, and receive personalized content recommendations.
            </p>
            <div>
              <a href="https://github.com/vinit3200/B42_WEB_067_Scripting-Stars" target="_blank" rel="noopener noreferrer"
                style={{
                  background: "#333",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  marginRight: "10px",
                  display: "inline-block"
                }}>GitHub</a>
              <a href="https://unity-hub.netlify.app/" target="_blank" rel="noopener noreferrer"
                style={{
                  background: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  display: "inline-block"
                }}>Live Demo</a>
            </div>
          </div>
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          background: "white",
          boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          borderRadius: "12px",
          padding: "30px",
          marginBottom: "40px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          // e.currentTarget.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          // e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.2)";
        }}>
          <img src={weather} alt="weatherApp"
            style={{
              width: "40%",
              height: "auto",
              borderRadius: "10px",
              marginRight: "20px",
              objectFit: "cover"
            }} />
        <div style={{ textAlign: "left", flex: 1 }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>WeatherForecast </h2>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6" }}>
            The Weather App allows users to check the current weather and forecast for a given city or their current location. The app fetches weather data from the OpenWeatherMap API and displays it in a user-friendly interface. Users can view real-time weather information, including temperature, humidity, and weather conditions, along with a 5-day forecast.
            </p>
            <div>
              <a href="https://github.com/sakshi1703/WeatherForecast" target="_blank" rel="noopener noreferrer"
                style={{
                  background: "#333",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  marginRight: "10px",
                  display: "inline-block"
                }}>GitHub</a>
              <a href="https://a-weatherforecast.netlify.app/" target="_blank" rel="noopener noreferrer"
                style={{
                  background: "#007bff",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                  display: "inline-block"
                }}>Live Demo</a>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}

export default Projects;
