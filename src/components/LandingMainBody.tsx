import headshot from '../assets/dowd4ri_headshot_portrait_bright.jpg'

/* Landing page's main body content */
function LandingMainBody() {
  return (
    <div>
      <h2>Meet the Candidate</h2>
      <img src={headshot} className="headshot" alt="Headshot of candidate Maeve Dowd smiling in a park"></img>
      <div>Maeve J. Dowd</div>
      <div>Pronouns: They/Them/Theirs (Shem/Shem/Shem's)</div>
      <h3>Short Bio</h3>
      <div>Maeve is a 42 year old Non-Binary Transfemme who has lived and worked in RI most of their life. They currently reside in Providence with their spouse. Currently a commuter to an out of state office, they have also worked in public facing retail and security jobs throughout the state as well as being a community organizer in both Providence and Newport involved with feeding people through Food Not Bombs in the early 2000’s. They were raised by their father Joseph who fought for custody of both the candidate and their brother post divorce and eventually the three of them moved in with his parents, the candidate’s grandparents Edward and Rita Dowd until moving to Richmond in the late 90’s. They were raised in a working class background, with many of their uncles and older cousins working in fields such as construction and healthcare while their father worked in printing and bindery and later IT. As an adult they have had many experiences including a period of homelessness that has helped them further understand the difficulties and hardships that people face daily.  The candidate earned an associates degree in business during this period and Pell Grants were one of the reasons they were able to find stability with their partner.</div>
      <h3>Donate</h3>
      <div>Link to donation coming soon</div>
    </div>
  );
}

export default LandingMainBody;
