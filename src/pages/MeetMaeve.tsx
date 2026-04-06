import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

/* Meet Maeve
  TODO:
    - Possibly break Issues into own component/s, possibly with pulling text from JSON
 */

function MeetMaeve() {
  return (
    <div>
      <TopBar />
      <div>
        <h2>Meet Maeve</h2>
        <div>
          <h3>Bio</h3>
          <div>Maeve is a 42 year old Non-Binary Transfemme who has lived and worked in RI most of their life. They currently reside in Providence with their spouse. Currently a commuter to an out of state office, they have also worked in public facing retail and security jobs throughout the state as well as being a community organizer in both Providence and Newport involved with feeding people through Food Not Bombs in the early 2000’s. They were raised by their father Joseph who fought for custody of both the candidate and their brother post divorce and eventually the three of them moved in with his parents, the candidate’s grandparents Edward and Rita Dowd until moving to Richmond in the late 90’s. They were raised in a working class background, with many of their uncles and older cousins working in fields such as construction and healthcare while their father worked in printing and bindery and later IT. As an adult they have had many experiences including a period of homelessness that has helped them further understand the difficulties and hardships that people face daily.  The candidate earned an associates degree in business during this period and Pell Grants were one of the reasons they were able to find stability with their partner.</div>
        </div>
        <div>
          <h3>Campaign Blurb</h3>
          <div>The actions of other states and the seeming lack of urgency with regards to the Democratic party which  is supposed to align with the interests of those people who are seeing the results of those actions have driven me to launch this campaign. If you are going to make my existence Political, I will become a Politician. Harm reduction is not a sustainable get out the vote strategy, and neither is denial. These things are happening and action must be taken to address them locally. I do not believe that good governance should have a profit impetus as it is the job of the state to work to provide the services that profit pursuit would otherwise result in a monopoly naturally or the seeking of which would inherently corrupt the service. People care and we need our politicians to care too.</div>
        </div>
        <div>
          <h3>Issues</h3>
          <div>
            <h4>Housing</h4>
            <div>There is no reason why there is not housing for all Rhode Island residents. Study after study has proven that housing first solutions are best and reduce instances of police action as well as ER usage and improving public access for all.</div>
          </div>
          <div>
            <h4>Healthcare</h4>
            <div>Access is hurt by our for profit systems for healthcare. We have had multiple hospitals go on strike recently but the investment to ensure that we have enough professionals in the field to make up the shortfall in care access is not coming. Access to gender affirming care should not be restricted or repealed.</div>
            <div>
              <h4>Queer Rights</h4>
              <div>We have nationally and internationally seen the rights of Gender and Sexual Minorities be both trampled on and ignored with people losing access to medicine as well as identification stripped from them or their access limited. While we live in an area that is mostly safe we still see attempts to erode our rights with regards to youth access to sports and similar efforts.</div>
            </div>
            <div>
              <h4>Infrastructure</h4>
              <div>Rhode Island has infrastructure that is failing throughout the state. A solution to this is to invest in public transportation more fully in an effort to remove cars from the road as well as adjust statewide zoning rules to allow more local businesses to create more walkable neighborhoods with food access. We need a more accessible last mile for more of our citizens.</div>
            </div>
            <div>
              <h4>Rising Costs</h4>
              <div>Many people, myself included, experience anxiety over the rising costs of housing and energy and struggle to get by because of it. Corporate landlords have made the upward mobility from renter to owner difficult and the lack of investment into renewable energy along with restrictions on extractive energy sources has made our electric bills some of the highest in the area with no signs of relief. - If you want to separate this into renewable investment, make sure if you do, you use language that phrases renewable energy in agrarian terms, like “harvestable energy”.</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MeetMaeve;
