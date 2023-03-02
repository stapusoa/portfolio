import '../App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



function Card(props) {
    return (
      <div className="card-wrap">
        <div className="card">
          <div className="card-bg" style={{backgroundImage: `url(${props.image})`}}></div>
          <div className="card-info" >
            <h1 slot="header">{props.header}</h1>
            <p slot="content">{props.content}</p>
          </div>
        </div>
      </div>
    );
  }
  
function Home() {
  return (
    <div className="App" sx={{ height: '200vh', marginBottom: '100vh' }}>
        <div className="Section">
            <Box sx={{ marginTop: '30vh', paddingLeft: '1vw' }}>
                <h1>
                    Sara Tapusoa
                </h1>
                <h5>
                    UX / PRODUCT DESIGNER
                </h5>
                <h3>
                    Designing for people, not just pixels.<br />Providing simple and intuitive solutions to user needs through research and design sprint methods.
                </h3>
            </Box>
            <Box sx={{ marginTop: '20vh', marginLeft: '0', paddingRight: '4vw' }}>
              <Grid container spacing={2}  sx={{ marginRight: '4vw' }}>
                <Grid item xs={12} sm={6} md={4} sx={{ padding: '0', margin: '0' }} >               
                  <Card image="./02.jpg" header="Quarium Hosting Portal" content="A website showcasing the hosting and portal product."  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <Card image="./04.jpg" header="Fishbowl Go Native App" content="Simplifying the manufacturing process with an inventory management app." />
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                  <Card image="./03.jpg" header="Travelpass Website" content="A website to help users book hotels and plan trips with more ease." />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ marginTop: '20vh', marginLeft: '0', paddingRight: '4vw', float: 'right', paddingRight: '5vw', paddingBottom: '20vh' }}>
                <div class="card2">
                    <img src={process.env.PUBLIC_URL + '/fishbowl.png'} class="card2-img" />
                    <div class="card2-body">
                        <h5 class="card2-title">Card Title</h5>
                        <p class="card2-text">Some quick example text to build on the card.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </Box>

        </div>
    </div>
  );
}

export default Home;