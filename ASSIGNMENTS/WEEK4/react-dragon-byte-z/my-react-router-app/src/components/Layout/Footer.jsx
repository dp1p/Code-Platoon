import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import axios from "axios";

function Footer() {

  return (
    <>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by{" "}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
            The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
          WEBPAGE CREATED BY DRAGON_BYTE_Z TEAM 2024 ©
        </div>
      </footer>
    </>
  );
}
export default Footer;
