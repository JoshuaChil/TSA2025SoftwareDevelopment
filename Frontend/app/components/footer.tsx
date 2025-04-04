type footP = {
    name?: string;
    name1?: string;
    name2?: string;
  };  
  
  export default function Foot({ name, name1, name2 }: footP) {
    return(
      <div className="bg-black h-30">
        <div>
            <button className="font-coolvetica text-xl tracking-wide m-3 cursor-pointer transition-opacity duration-300 opacity-100 hover:opacity-20">Licensing</button><br></br>
            <button className="font-coolvetica text-xl tracking-wide m-3 cursor-pointer transition-opacity duration-300 opacity-100 hover:opacity-20">Contact Us</button>
        </div>
        <div className="text-right bg-black">
            <h3 className="m-3 text-xl font-coolvetica">1219 Broad Street, Durham, North Carolina, 27705.</h3>
            <h1 className="text-whitefont-coolvetica tracking-wide m-3">© 2025 LitDetect. All Rights Reserved.</h1>
        </div>
    </div>
    );
  }