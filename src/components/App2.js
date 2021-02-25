import React from "react"

class App2 extends React.Component {
  componentDidMount() {
    let xmlhttp = new XMLHttpRequest();
    let url = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCWOA1ZGywLbqmigxE4Qlvuw&maxResults=5&key=AIzaSyBFCg_faaA_1YO-4Umz2K4xTdUKMhh-RRY";
    let out = "";
    function myFunction(arr) {
      let i;
      for (i = 0; i < arr.items.length; i++) {
        out += '<div class="col-md-2 col-sm-12">'
          + '<iframe class="img-fluid" width= "100%"'
          + ' src="https://www.youtube.com/embed/' + arr.items[i].id.videoId + '"'
          + ' frameborder="0" allow="accelerometer; autoplay; '
          + ' clipboard-write; encrypted-media; gyroscope; picture-in-picture" '
          + ' allowfullscreen></iframe><h6>' + arr.items[i].snippet.title + '</h6></div>';
      }
    }

    xmlhttp.onreadystatechange = function (e) {
      if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
        document.getElementById("demo").innerHTML = out;
      }
      else {
        console.log(this.status);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

  }
  render() {
    return (
      <>
        <div className="container-fluid ml-md-5">
          <h3><b>Latest videos on Netflix!</b></h3>
          <br />
          <div id="demo" className="row mx-auto">

          </div>
        </div>
      </>
    );

  }


}
export default App2;