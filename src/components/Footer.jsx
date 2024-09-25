const Footer = () => {
  return (
    <div>
      <div className="footer-top bg-[#2C3639] flex justify-between">
        <div className="footer-logo ml-6 mt-8">
          <img src="./logo2.png" alt="App logo" className="w-[200px]" />
        </div>

        <div className="footer-links">
          <ul className="mt-12 cursor-pointer text-lg py-6 text-white">
            
          <li>Affiliate</li>
            <li>About Us</li>
            <li>Disclaimer</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-address py-16 mr-8">
          <p className="text-white">
            RGI Stadium Road, Uppal,<br/> Hyderabad - 500039 <br/>(Near Survey Of India,<br/>
            GE Capital Complex,<br/> Vishakha Ground)
          </p>
        </div>
      </div>

      <div className="footer-bottom bg-[#040303]">
        <p className="text-xl text-white p-6">All rights are reserved to @Mr.Satyam Singh - 2024.</p>
      </div>
    </div>
  );
};

export default Footer;
