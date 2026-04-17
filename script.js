body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      min-height: 100vh;
    }

    #background-video {  /*took from past project*/
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      z-index: -1;
      object-fit: cover;
    }

   

#ISKOCRACY { /*TOOK FROM PAST PROJECT*/
  position: fixed;
  top: 10px;
  left: 10px;
  width: 100px;
  height: 100px;
  z-index: +2; 
  margin-left: 100px;
  opacity: 0.5;
}

 /*HEADING CSS*/
    header {
      text-align: center;
      padding: 20px;
    }

    h1 {
      font-size: 3rem;
      color: white;
      margin: 10px 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    h2 {
      font-size: 1.5rem;
      color: white;
      margin: 10px 0;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    }
 /*MAIN CONTENT CSS*/
    main {
      margin: 20px auto;
      padding: 30px;
      max-width: 500px;
     background-color: rgba(98, 130, 88, 0.95); 
     border: 3px solid #000;
   border-radius: 10px;
    color: white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    }

    .form-label {
      display: block;
     font-size: 1.1rem;
     margin-top: 2vh;
   font-weight: bold;
    }

    .inputbox {
      width: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
    }
 /*TAKES ALL INPUT WITH RADIO TYPE FOR CSS*/
    input[type="radio"].inputbox,
    input[type="checkbox"] {
      width: auto;
      margin-right: 10px;
      margin-top: 10px;
    }
 /* TAKES ALL SPAN WITH CLASS "ERROR" FOR ERROR MESSAGE CSS */
    span[class="Error"] {
      color: #ee6d6d;
      font-size: 0.9rem;
      font-weight: bold;
      display: block;
      margin-bottom: 6.7px;
    }
 /*SUBMIT BUTTON CSS*/
    #submitBtn {
      margin-top: 20px;
      background-color: #333;
      color: white;
      padding: 12px 20px;
      font-size: 1.1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      font-weight: bold;
      transition: background-color 0.3s;
       border: 1px solid #3c4b41;
    }

    #submitBtn:hover {
      background-color: #fafffc;
      color: black;
      border: 1px solid #000000;
      
    }
 /*DISPLAYS SUCCESS MESSAGE AND HIDES IT UNTIL VALID*/
    #successMsg {
      display: none; /* Hidden until valid */
      color: white;
      background: rgba(119, 150, 119, 0.9);
      padding: 15px;
      border-radius: 5px;
      margin-top: 20px;
      text-align: center;
      font-weight: bold;
      border: 2px solid #000000;
    }

 
 /*NAVBARSSS CSS took from past project*/
  nav {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 15px;
  background: white(126, 111, 111, 0.9);
  border-radius: 12px;
  position: relative;
  z-index: 2;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
  background-color:#4f704d ;
}


nav a {
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  padding: 8px 14px;
  transition: all 0.3s ease;
}
nav a:hover {
  background-color: #628258;
  color: #fff;
  border-radius: 8px;
}

nav a.active {
  text-align: center;
  background-color: white ;
  color: white;
}

nav a:hover {
  transform: translateY(-3px);
  background-color: #628258;
}

nav a:not(.active):hover {
  box-shadow: 0 0 6px rgba(98, 130, 88, 0.8);
}
