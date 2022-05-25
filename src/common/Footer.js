import React from "react";

function Footer() {
  var today = new Date();

  return (
    <footer className="py-3 text-center mt-4">
      <p className="p-3">
        Copyright &copy; {today.getFullYear()} Salon Maxx | All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
