import { useEffect } from "react";
import './App.css';
import Header from"../src/components/header/header";
import End from "../src/components/end/end";
import photo1 from"./Images/Mask_Group_5.png"
import aboutUsImage from "./Images/aboutUsImage.png"
import Mask_Group_2 from "./Images/Mask_Group_2.png"
import Mask_Group_3 from "./Images/Mask_Group_3.png"
import Mask_Group_4 from "./Images/Mask_Group_4.png";

function App() {
  useEffect(() => {
    const resizeApp = () => {
      const appElement = document.getElementById("main");
      const scaleWidth = window.innerWidth / 1920; // Calculate scale based on width
      const scale = Math.min(scaleWidth); // Keep aspect ratio
      appElement.style.transform = `scale(${scale})`;
      appElement.style.transformOrigin = "top left";
    };

    resizeApp(); // Initial call
    window.addEventListener("resize", resizeApp); // Listen for window resize

    return () => {
      window.removeEventListener("resize", resizeApp); // Cleanup listener
    };
  }, []);

  return (
    <div id="main">
      <Header/>
      <>
      <div id="Home_t">
		<div id="start_title">
			<div id="Try_Delicious_Food_Order_NOW">
				<span>Try Delicious Food</span><br/><span style={{fontStyle:"normal",fontWeight:"bold",fontSize:"151px",color:"rgba(255,144,65,1)",textTransform:"uppercase"}}>Order NOW</span>
			</div>
			<div id="Lorem_ipsum_dolor_sit_amet_con">
				<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</span>
			</div>
		</div>
		<img id="Mask_Group_1" src={photo1} srcset={`${photo1} 1x, ${photo1} 2x`} alt=""/>
			
	    </div>
	    <div id="About_Us_y">
		<img id="aboutUsImage" src={aboutUsImage} srcset={`${aboutUsImage} 1x, ${aboutUsImage} 2x`} alt=""/>
			
		<div id="aboutUsInfo">
			<div id="About_US">
				<span>About</span><span style={{color:"rgba(24,106,165,1)"}}> </span><span style={{color:"rgba(255,144,65,1)"}}>US</span>
			</div>
			<div id="Lorem_ipsum_dolor_sit_amet_con_">
				<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</span>
			</div>
			<div id="Lorem_ipsum_dolor_sit_amet_con_ba">
				<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</span>
			</div>
		</div>
	   </div>
     <div id="Featured_">
		<div id="Featured_ba">
			<span style={{textTransform:"uppercase"}}>Featu</span><span style={{color:"rgba(255,144,65,1)",textTransform:"uppercase"}}>red</span>
		</div>
		<div id="products">
			<div id="product">
				<div id="Cheesy_Dreamboat">
					<span style={{textTransform:"capitalize"}}>Cheesy</span><span style={{color:"rgba(24,106,165,1)",textTransform:"capitalize"}}> </span><span style={{color:"rgba(255,144,65,1)",textTransform:"capitalize"}}>Dreamboat</span>
				</div>
				<div id="Lorem_ipsum_dolor_sit_amet_con_bb">
					<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </span>
				</div>
				<svg class="container">
					<rect id="container" rx="68" ry="68" x="0" y="0" width="581" height="382">
					</rect>
				</svg>
				<div id="Image">
					<svg class="Ellipse_5">
						<ellipse id="Ellipse_5" rx="197.25" ry="200" cx="197.25" cy="200">
						</ellipse>
					</svg>
					<img id="Mask_Group_2" src={Mask_Group_2} srcset={`${Mask_Group_2} 1x, ${Mask_Group_2}  2x`} alt=""/>
						
				</div>
			</div>
			<div id="product_be">
				<div id="Big_Bite_Beast">
					<span style={{textTransform:"capitalize;"}}>Big Bite </span><span style={{color:"rgba(255,144,65,1)",textTransform:"capitalize"}}>Beast</span>
				</div>
				<div id="Lorem_ipsum_dolor_sit_amet_con_bg">
					<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </span>
				</div>
				<svg class="container_bh">
					<rect id="container_bh" rx="68" ry="68" x="0" y="0" width="581" height="382">
					</rect>
				</svg>
				<div id="Image_bi">
					<svg class="Ellipse_5_bj">
						<ellipse id="Ellipse_5_bj" rx="197.25" ry="200" cx="197.25" cy="200">
						</ellipse>
					</svg>
					<img id="Mask_Group_3" src={Mask_Group_3} srcset={`${Mask_Group_3} 1x`} alt=""/>
						
				</div>
			</div>
			<div id="product_bl">
				<div id="Skewer_Supreme">
					<span style={{textTransform:"capitalize"}}>Skewer </span><span style={{color:"rgba(255,144,65,1)",textTransform:"capitalize"}}>Supreme</span>
				</div>
				<div id="Lorem_ipsum_dolor_sit_amet_con_bn">
					<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut </span>
				</div>
				<svg class="container_bo">
					<rect id="container_bo" rx="68" ry="68" x="0" y="0" width="581" height="382">
					</rect>
				</svg>
				<div id="Image_bp">
					<svg class="Ellipse_5_bq">
						<ellipse id="Ellipse_5_bq" rx="197.25" ry="200" cx="197.25" cy="200">
						</ellipse>
					</svg>
					<img id="Mask_Group_4" src={Mask_Group_4} srcset={`${Mask_Group_4} 1x`} alt=""/>
						
				</div>
			</div>
		</div>
	   </div>
     <div id="contact">
		<div id="get_in_touch">
			<span style={{textTransform:"uppercase"}}>get in</span><span style={{color:"rgba(24,106,165,1)",textTransform:"uppercase"}}> </span><span style={{color:"rgba(255,144,65,1)",textTransform:"uppercase"}}>touch</span>
		</div>
		<div id="getInTouchIntro">
			<div id="Lorem_ipsum_dolor_sit_amet_con_bv">
				<span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no</span>
			</div>
			<div id="ID002-010-66269735">
				<span>002-010-66269735</span>
			</div>
			<div id="Group_35">
				<svg class="facebook-f" viewBox="22.89 0 16.641 31.071">
					<path id="facebook-f" d="M 38.44073104858398 17.47750091552734 L 39.30368423461914 11.85435771942139 L 33.90810775756836 11.85435771942139 L 33.90810775756836 8.205322265625 C 33.90810775756836 6.666937828063965 34.66182327270508 5.167392730712891 37.07833480834961 5.167392730712891 L 39.53125 5.167392730712891 L 39.53125 0.3798929154872894 C 39.53125 0.3798929154872894 37.3052978515625 0 35.17704391479492 0 C 30.7336368560791 0 27.82921600341797 2.693234443664551 27.82921600341797 7.568729400634766 L 27.82921600341797 11.85435771942139 L 22.89000129699707 11.85435771942139 L 22.89000129699707 17.47750091552734 L 27.82921600341797 17.47750091552734 L 27.82921600341797 31.07111358642578 L 33.90810775756836 31.07111358642578 L 33.90810775756836 17.47750091552734 L 38.44073104858398 17.47750091552734 Z">
					</path>
				</svg>
				<svg class="linkedin-in" viewBox="0 0.01 31.071 31.07">
					<path id="linkedin-in" d="M 6.954842090606689 31.07999801635742 L 0.5132213234901428 31.07999801635742 L 0.5132213234901428 10.33614921569824 L 6.954842090606689 10.33614921569824 L 6.954842090606689 31.07999801635742 Z M 3.730564117431641 7.506497383117676 C 1.670743346214294 7.506497383117676 0 5.800383567810059 0 3.740562438964844 C 0 1.680228471755981 1.670230507850647 0.009998321533203125 3.730564594268799 0.009998321533203125 C 5.790897369384766 0.009998321533203125 7.461128234863281 1.680228710174561 7.461128234863281 3.740562438964844 C 7.461128234863281 5.800383567810059 5.789690971374512 7.506497383117676 3.730564117431641 7.506497383117676 Z M 31.06375885009766 31.07999801635742 L 24.63600921630859 31.07999801635742 L 24.63600921630859 20.98201942443848 C 24.63600921630859 18.5754280090332 24.58745765686035 15.48916625976562 21.28689384460449 15.48916625976562 C 17.93777847290039 15.48916625976562 17.4245548248291 18.10382080078125 17.4245548248291 20.80863571166992 L 17.4245548248291 31.07999801635742 L 10.98987102508545 31.07999801635742 L 10.98987102508545 10.33614921569824 L 17.16794395446777 10.33614921569824 L 17.16794395446777 13.16580200195312 L 17.25810432434082 13.16580200195312 C 18.11809730529785 11.53597736358643 20.21883583068848 9.815993309020996 23.35295867919922 9.815993309020996 C 29.87225341796875 9.815993309020996 31.07069396972656 14.10901927947998 31.07069396972656 19.68509864807129 L 31.07069396972656 31.07999801635742 L 31.06375885009766 31.07999801635742 Z">
					</path>
				</svg>
				<svg class="Icon_awesome-instagram" viewBox="-0.005 2.238 31.518 31.511">
					<path id="Icon_awesome-instagram" d="M 15.75703144073486 9.9140625 C 11.28515625 9.9140625 7.678125381469727 13.52109336853027 7.678125381469727 17.99296951293945 C 7.678125381469727 22.46484565734863 11.28515625 26.07187652587891 15.75703144073486 26.07187652587891 C 20.22890663146973 26.07187652587891 23.8359375 22.46484375 23.8359375 17.99296951293945 C 23.8359375 13.52109527587891 20.22890663146973 9.9140625 15.75703144073486 9.9140625 Z M 15.75703144073486 23.24531173706055 C 12.8671875 23.24531173706055 10.50468826293945 20.88984298706055 10.50468826293945 17.99296760559082 C 10.50468826293945 15.09609222412109 12.86015701293945 12.74062347412109 15.75703239440918 12.74062347412109 C 18.65390777587891 12.74062347412109 21.00937652587891 15.09609222412109 21.00937652587891 17.99296760559082 C 21.00937652587891 20.88984298706055 18.64687728881836 23.24531173706055 15.75703239440918 23.24531173706055 Z M 26.05078125 9.583593368530273 C 26.05078125 10.63124942779541 25.20703125 11.46796798706055 24.16640663146973 11.46796798706055 C 23.11874961853027 11.46796798706055 22.28203201293945 10.62421798706055 22.28203201293945 9.583593368530273 C 22.28203201293945 8.54296875 23.12578201293945 7.699218273162842 24.16640663146973 7.699218273162842 C 25.20703125 7.699218273162842 26.05078125 8.54296875 26.05078125 9.583593368530273 Z M 31.40156173706055 11.49609375 C 31.28203010559082 8.971875190734863 30.70546722412109 6.735937595367432 28.85624885559082 4.893750190734863 C 27.01406097412109 3.051562786102295 24.77812385559082 2.475000143051147 22.25390625 2.348437786102295 C 19.65234375 2.200781583786011 11.85468769073486 2.200781583786011 9.253125190734863 2.348437786102295 C 6.735937595367432 2.467968940734863 4.5 3.044531583786011 2.650781631469727 4.88671875 C 0.8015632629394531 6.72890567779541 0.2320315837860107 8.96484375 0.1054692268371582 11.48906230926514 C -0.04218702018260956 14.09062480926514 -0.04218702018260956 21.88828086853027 0.1054692268371582 24.48984336853027 C 0.2250004708766937 27.01406288146973 0.8015629649162292 29.25 2.650781631469727 31.09218597412109 C 4.5 32.93437194824219 6.728906631469727 33.51093673706055 9.253125190734863 33.63749694824219 C 11.85468769073486 33.78515243530273 19.65234375 33.78515243530273 22.25390625 33.63749694824219 C 24.77812576293945 33.51796722412109 27.01406288146973 32.94140243530273 28.85625076293945 31.09218406677246 C 30.69843864440918 29.24999618530273 31.27500152587891 27.01405906677246 31.40156364440918 24.48984146118164 C 31.54921913146973 21.88827896118164 31.54921913146973 14.09765434265137 31.40156364440918 11.49609184265137 Z M 28.04062461853027 27.28125 C 27.4921875 28.65937423706055 26.43046760559082 29.72109413146973 25.04531288146973 30.27656173706055 C 22.97109413146973 31.09921836853027 18.04921913146973 30.90937423706055 15.75703144073486 30.90937423706055 C 13.46484375 30.90937423706055 8.535938262939453 31.09218597412109 6.46875 30.27656173706055 C 5.090624809265137 29.72812461853027 4.028906345367432 28.66640472412109 3.473437547683716 27.28125 C 2.650781154632568 25.20703125 2.840625047683716 20.28515625 2.840625047683716 17.99296951293945 C 2.840625047683716 15.70078277587891 2.657812595367432 10.77187538146973 3.473437547683716 8.70468807220459 C 4.021874904632568 7.326562881469727 5.083593845367432 6.264844417572021 6.46875 5.709375381469727 C 8.54296875 4.886719226837158 13.46484375 5.076562881469727 15.75703144073486 5.076562881469727 C 18.04921913146973 5.076562881469727 22.97812461853027 4.893750190734863 25.04531288146973 5.709375381469727 C 26.42343711853027 6.257812976837158 27.48515701293945 7.319531440734863 28.04062461853027 8.70468807220459 C 28.86328125 10.77890682220459 28.67343711853027 15.70078182220459 28.67343711853027 17.99296951293945 C 28.67343711853027 20.28515625 28.86328125 25.21406364440918 28.04062461853027 27.28125 Z">
					</path>
				</svg>
			</div>
		</div>
		<div id="details">
			<div id="Inputs">
				<div id="Email">
					<div id="Email_b">
            <input
            placeholder="Email"
            type="text"
            />
					</div>
				</div>
				<div id="subject">
					<div id="subject_b">
          <input
            placeholder="Subject"
            type="text"
            />
					</div>
				</div>
				<div id="Message">
					<div id="write_your_message_here">
          <textarea
             placeholder="Write Your Message Here"
          />
					</div>
				</div>
			</div>
			<div id="sendButton">
				<button id="send">
					<span>send</span>
				</button>
			</div>
		</div>
	</div>
	
	
      </>
      <End/>
    </div>
  );
}

export default App;
