

function calculate()
{

    addx = 100;
    addy = 100;

    var canvas = document.createElement('canvas');
    var img = document.getElementById("image2");
    canvas.width = addx + img.width;
    canvas.height = addy + img.height;
    var cont = canvas.getContext('2d');
    cont.drawImage(img, addx, addy, img.width, img.height);

    multiplyX = 9;
    multiplyY = 9;
    rows = Math.floor(img.height/multiplyY);
    columns = Math.floor(img.width/multiplyX);
    var posx, posy;


    for(var i=0; i<rows; i++)
    {
        for(var j=0; j<columns; j++)
        {
            var div = document.createElement("div");
            div.style.width = "6px";
            div.style.height = "6px";
            div.style.borderRadius = "3px";
            
            div.style.position = "absolute";
            posx = (addx + (multiplyX*i));
            posy = (addy + (multiplyY*j));
            div.style.left = posx + "px";
            div.style.top = posy + "px";
            
            var pixelData = cont.getImageData(posx, posy, 1, 1).data;
            if(pixelData[3] == 0)
            {
                div.style.background = "#dedede";
            }
            else
            {
                div.style.background = "transparent";
            }
            
            div.style.color = "black";
            div.style.fontSize = "5px";
            document.body.appendChild(div);
        }
    }

    var varx = [27,26,33,33,32,32,62,24,27,34, 37,27,39,33,19,18,38,29,34,28, 11,36,18,38,37,18,43,29,5];
    var vary = [35,34,29,80,48,30,60,58,75,81, 32,52,54,49,64,71,90,96,31,93, 35,93,52,25,67,59,52,82,47];

    for(var i=0; i<varx.length; i++)
    {
        var div = document.createElement("div");
        div.style.width = "6px";
        div.style.height = "6px";
        div.style.borderRadius = "3px";
        div.style.position = "absolute";
        div.style.left = (addx + Math.floor((multiplyX * varx[i]*columns)/100)) + "px";
        div.style.top = (addy + Math.floor((multiplyY * vary[i]*rows)/100))  + "px";
        div.style.background = "red";
        div.style.color = "black";
        div.style.fontSize = "5px";
        var idName = i;
        div.className = "red";
        div.setAttribute('data-index', idName);
        div.onmouseover = Change;
        // div.onmouseout = Default;
        document.body.appendChild(div);
    }

    
    // document.getElementById("i1").addEventListener("mouseover", mouseover(3));
}
var cities = ['Jaipur', 'Jaipur', 'New Delhi', 'Bengaluru', 'Bhopal', 'New Delhi', 'Bhubaneswar', 'Kopargaon', 'Bellary', 'Bengaluru', 
'Ravali', 'Indore', 'Nagpur', 'Bhopal', 'Pune', 'Goa', 'Theerampalyam', 'Ookode', 'Ghaziabad', 'Kochi', 'Jaisalmer', 'Madurai', 'Vadodra', 'Byashi', 'Hyderabad', 'Pune', 'Narna', 'Hampi', 'Bhujdoi']; 
var glink = ['https://drive.google.com/file/d/1lTA074-D6__tlpPjyMYoXxnx4n_OFLRN/view?usp=sharing',
'https://drive.google.com/file/d/1uudB282TMLSq19JCWZljyIzN3At1mDqH/view?usp=sharing',
'https://drive.google.com/file/d/1fPvB0GVW8u4H6_JAmExZ7M_DsflJGKpY/view?usp=sharing',
'https://drive.google.com/file/d/1CA_hywvdMNhd6DrlLp9bWENtJsxKgi9d/view?usp=sharing',
'https://drive.google.com/file/d/1hg18Ryu41bYz3K_PpI5C8DhQx0RuVsXp/view?usp=sharing',
'https://drive.google.com/file/d/1lzdDrNugaut0kya034GGBXTf--GFVGsr/view?usp=sharing',
'https://drive.google.com/file/d/1erriFSnU5XIw0z5CfXtC_fLsDHQeU7Gy/view?usp=sharing',
'https://drive.google.com/file/d/1y5cN6eeZ3h7PGGu2GGcY53pAz4DlbIYS/view?usp=sharing',
'https://drive.google.com/file/d/13oyBbISFgUWBnziJu26Sifjk93-BWJmH/view?usp=sharing',
'https://drive.google.com/file/d/1-3In25wNfc2aZSxDZLRvn5OUHeMOnTAS/view?usp=sharing',
'https://drive.google.com/file/d/1sQnipiksNs8qahISK5rIFjj6BzBzdvU9/view?usp=sharing',
'https://drive.google.com/file/d/1CcixJosY6IRmf4_B21rQRZYvzE-43FIZ/view?usp=sharing',
'https://drive.google.com/file/d/1-DIer-qUkSDKjF9GudHE-vMGu_-86hOf/view?usp=sharing',
'https://drive.google.com/file/d/1NfGf3FrpvKoIvt13F2U2Pw0l_5JDdKmk/view?usp=sharing',
'https://drive.google.com/file/d/1d0THY6Tn7dDWXSEr-QePiLJt6m1TLdA6/view?usp=share_link',
'https://drive.google.com/file/d/1D-MKuBvVYwnGzk_qNqadwuwUXno_-pWE/view?usp=share_link',
'https://drive.google.com/file/d/1VGyJrYoYykydr5_z25iOp5iaMkHs0PM0/view?usp=share_link',
'https://drive.google.com/file/d/15FpZE4W6nZpt27UWP20CxXN5YXUKeUjJ/view?usp=share_link',
'https://drive.google.com/file/d/1oFo4lOkoQWRYKO3aBoi4W5j0eNxS4r_O/view?usp=share_link',
'https://drive.google.com/file/d/1r00cGLfpg22kDIvJETsucbuQhCZuDaoZ/view?usp=share_link',
'https://drive.google.com/file/d/19-kckoH4ei-gJIh3f7oNj0K1Fn3y9z8p/view?usp=share_link',
'https://drive.google.com/file/d/1IeNa3Kv97s_vD60aMP5M2lWwdqqY8lKZ/view?usp=share_link',
'https://drive.google.com/file/d/1UDNUoU1j21-6axoO5miL1rYG8GBvGMMf/view?usp=share_link',
'https://drive.google.com/file/d/1IeNa3Kv97s_vD60aMP5M2lWwdqqY8lKZ/view?usp=share_link',
'https://drive.google.com/file/d/1iZprj5zKXAYZ0M1HjPVUKBdaA2gKm2EX/view?usp=share_link',
'https://drive.google.com/file/d/1D-F9ja7gGT1Mvy3-WuBNUK-5WH9L6V88/view?usp=share_link',
'https://drive.google.com/file/d/1EI7NKon9_pncD8p3kWpHPanbVpdXdmqa/view?usp=share_link',
'https://drive.google.com/file/d/1mCjjdfEiRfzEyzg9twZMJ9dI9Oa9tXcz/view?usp=share_link',
'https://drive.google.com/file/d/1HMjwRtk0gm6qCH7xi9OYnBGwaeTwEO4b/view?usp=share_link'];  
function Change()
{
    var cont = this.getAttribute('data-index');
    document.getElementById("data").innerHTML = cont;
    this.style.cursor="pointer";
    document.getElementById("glink").href = glink[cont];
    document.getElementById("city").innerHTML = cities[cont];
    document.getElementById("glink").style.visibility = "visible";
    document.getElementById("city").style.visibility = "visible";
    document.getElementById("description").style.visibility = "visible";
    document.getElementById("begin").style.visibility = "hidden";
}

function Default()
{
    document.getElementById("data").innerHTML = "hover on red dots to see";
}
